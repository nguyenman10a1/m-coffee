import express from "express";
import authRoutes from "./auth.route.js";
import userRoutes from "./user.route.js";

const router = express.Router();

// mount auth routes at /auth
router.use("/auth", authRoutes);

// mount user routes at /users
router.use("/users", userRoutes);

export default router;
