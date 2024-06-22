import express from "express";
import userController from "../controllers/userController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/api/users", userController.createUser);
router.post("/api/login", userController.loginUser);
router.get("/api/users", authenticateToken, userController.getUsers);
router.get("/api/users/:id", authenticateToken, userController.getUserById);
router.put("/api/users/:id", authenticateToken, userController.updateUser);
router.delete("/api/users/:id", authenticateToken, userController.deleteUser);

export default router;
