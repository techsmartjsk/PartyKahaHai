import { Report } from "../models/report.model.js";

async function createReport(req, res) {
  try {
    const {
      reportedUser,
      reportedBy,
      reportedReason,
      detailedExplanation,
      additionalInfo,
    } = req.body;

    const report = new Report({
      reportedUser,
      reportedBy,
      reportedReason,
      detailedExplanation,
      additionalInfo,
    });

    await report.save();
    res.status(201).json({ message: "Report created successfully", report });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

async function getReports(req, res) {
  try {
    const reports = await Report.find().populate("reportedUser reportedBy");
    res.status(200).json({ reports });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}


async function updateReportStatus(req, res) {
  try {
    const { id } = req.params;
    const { status, action } = req.body;

    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    report.status = status;
    report.action = action;
    await report.save();

    res.status(200).json({ message: "Report updated successfully", report });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

async function deleteReport(req, res) {
  try {
    const { id } = req.params;

    const report = await Report.findByIdAndDelete(id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({ message: "Report deleted successfully", report });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

export default {
  createReport,
  getReports,
  updateReportStatus,
  deleteReport,
};
