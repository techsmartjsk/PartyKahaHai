import express from "express";
import UserController from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/:id", authMiddleware, UserController.getUserById);
router.post("/", authMiddleware, UserController.createUser);
router.put("/:id", authMiddleware, UserController.updateUser);
router.delete("/:id", authMiddleware, UserController.deleteUser);

export default router;
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - sub
 *         - role
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the user
 *         sub:
 *           type: string
 *           description: Unique authentication provider ID
 *         name:
 *           type: string
 *           description: Full name of the user
 *         email:
 *           type: string
 *           description: Email address of the user
 *         verified:
 *           type: boolean
 *           description: Indicates if the user is verified
 *         blocked:
 *           type: boolean
 *           description: Indicates if the user is blocked
 *         profilePicture:
 *           type: string
 *           description: URL of the user's profile picture
 *         additionalProfilePictures:
 *           type: array
 *           items:
 *             type: string
 *           description: List of additional profile pictures
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: Date of birth of the user
 *         gender:
 *           type: string
 *           enum: [Male, Female, Other, Prefer Not to Say]
 *           description: Gender of the user
 *         designation:
 *           type: string
 *           description: User's job designation
 *         company:
 *           type: object
 *           description: User's company details (Flexible structure)
 *         location:
 *           type: object
 *           properties:
 *             city:
 *               type: string
 *             state:
 *               type: string
 *           description: User's location details
 *         whyHere:
 *           type: array
 *           items:
 *             type: string
 *           description: Reasons for joining
 *         hobbies:
 *           type: array
 *           items:
 *             type: string
 *           description: User's hobbies
 *         role:
 *           type: string
 *           description: Role assigned to the user
 *         govtUID:
 *           type: string
 *           description: Government-issued ID
 *         industry:
 *           type: string
 *           description: Industry the user works in
 *         profileVerified:
 *           type: boolean
 *           description: Whether the user's profile is verified
 *         alcohol:
 *           type: string
 *           enum: [Yes, No, Occasionally]
 *           description: User's alcohol consumption preference
 *         smoking:
 *           type: string
 *           enum: [Yes, No, Occasionally]
 *           description: User's smoking habits
 *         education:
 *           type: string
 *           description: User's highest level of education
 *         prompts:
 *           type: array
 *           items:
 *             type: string
 *           description: User-provided responses to profile prompts
 *         exerciseFitness:
 *           type: string
 *           enum: [Active, Regular, Sometimes, Never]
 *           description: User's exercise and fitness habits
 *         religion:
 *           type: string
 *           description: User's religious beliefs
 *         chatRooms:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: List of chat rooms the user is part of
 *         hostedParties:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: List of parties hosted by the user
 *         attendedParties:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: List of parties attended by the user
 *         requests:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: Requests associated with the user
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique ID of the user
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: User already exists or invalid data
 *       500:
 *         description: Internal server error
 */
