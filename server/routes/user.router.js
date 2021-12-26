const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

// General Queries
router.get("/user", userController.getAllUsers);
router.post("/user", userController.createNewUser);

// Queries by ID
router.get("/user/:id", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
