const express = require('express');

const router = express.Router();

const gardenController = require('../controllers/garden');

// General Queries
router.get('/garden', gardenController.getAllGardens);
router.post('/garden', gardenController.createNewGarden);

// Queries by ID
router.get('/garden/:id', gardenController.getGarden);
router.put('/garden/:id', gardenController.updateGarden);
router.delete('/garden/:id', gardenController.deleteGarden);

module.exports = router;
