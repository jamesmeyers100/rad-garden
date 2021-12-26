const express = require("express");

const router = express.Router();

const plantController = require("../controllers/plant.conroller");

// General Queries
router.get("/plant", plantController.getAllPlants);
router.post("/", plantController.createNewPlant);

// Queries by ID
router.get("/plant/:id", plantController.getPlant);
router.put("/plant/:id", plantController.updatePlant);
router.delete("/plant/:id", plantController.deletePlant);

module.exports = router;
