import axios from "axios";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

const { INFOBIP_URL, INFOBIP_APP_ID, INFOBIP_MSG_ID, INFOBIP_API_KEY, JWT_SECRET_KEY: secretKey } = process.env;

const headers = {
  Authorization: `App ${INFOBIP_API_KEY}`,
  "Content-Type": "application/json",
};

async function verifyToken(req, res, next) {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return res.status(401).json({ message: "Access token not found" });
    }

    jwt.verify(accessToken, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid access token" });
      }
      req.userId = decoded.id;
      res.status(200).json({ message: "Authentication Successful" });
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function sendCode(req, res) {
  try {
    const { sub, role, type } = req.body;

    const url =
      type === "email"
        ? `${INFOBIP_URL}/2fa/2/pin/email`
        : `${INFOBIP_URL}/2fa/2/pin`;

    const otpBody = {
      applicationId: INFOBIP_APP_ID,
      messageId: INFOBIP_MSG_ID,
      to: sub,
    };

    if (type === "phone") {
      otpBody["from"] = "Party Kaha Hai";
    }

    try {
      const response = await axios.post(url, otpBody, { headers });
      res.status(201).json({ data: response.data, role });
    } catch (error) {
      res.status(401).json({ message: error });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function verifyCode(req, res) {
  try {
    const { sub, pinId, pin, role } = req.body;
    const url = `${INFOBIP_URL}/2fa/2/pin/${pinId}/verify`;

    const otpBody = { pin };

    try {
      const response = await axios.post(url, otpBody, { headers });

      if (response.status === 200 && response.data["verified"]) {
        const user = await User.findOne({ sub });
        if (!user) {
          const newUser = new User({
            sub,
            role,
          });

          await newUser.save();
        }

        const accessToken = jwt.sign({ id: user._id }, secretKey, {
          expiresIn: "15m",
        });

        const refreshToken = jwt.sign({ id: user._id }, secretKey, {
          expiresIn: "90d",
        });

        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          maxAge: 15 * 60 * 1000,
        });
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 90 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid verification code" });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function refreshToken(req, res) {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
    }

    const decoded = jwt.verify(refreshToken, secretKey);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const accessToken = jwt.sign({ id: user._id }, secretKey, {
      expiresIn: "15m",
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    });
    res.status(200).json({ message: "Access token refreshed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default {
  verifyToken,
  sendCode,
  verifyCode,
  refreshToken,
};
