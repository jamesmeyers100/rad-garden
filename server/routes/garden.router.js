const express = require("express");

const router = express.Router();

const gardenController = require("../controllers/garden.controller");

// General Queries
router.get("/garden", gardenController.getAllGardens);
router.post("/garden", gardenController.createNewGarden);

// Queries by ID
router.get("/garden/:id", gardenController.getGardenByUserId);
router.delete("/garden/:id", gardenController.deleteGarden);

module.exports = router;
