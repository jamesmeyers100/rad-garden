const db = require("../db");

const getAllPlants = (req, res, next) => {
  db.query("SELECT * FROM plant", [], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).json(results.rows);
  });
};

const getPlantbyCommonName = (req, res, next) => {
  const { common_name } = req.params;

  db.query(
    "SELECT common_name, sci_name, zone_id, days_to_harvest, life_cycle FROM plant WHERE common_name = $1",
    [common_name],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(results.rows);
    }
  );
};

const createNewPlant = (req, res, next) => {
  const { common_name, sci_name, zone_id, days_to_harvest, life_cycle } =
    req.body;

  db.query(
    "INSERT INTO plant ( common_name, sci_name, zone_id, days_to_harvest, life_cycle ) VALUES ($1, $2, $3, $4, $5)",
    [common_name, sci_name, zone_id, days_to_harvest, life_cycle],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.sendStatus(201);
    }
  );
};

const updatePlant = (req, res, next) => {
  const { id } = req.params;
  const { comomon_name, zipcode } = req.body;

  db.query(
    "UPDATE plant SET name = $1, zipcode = $2 WHERE id = $3",
    [common_name, zipcode, id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.sendStatus(200);
    }
  );
};

const deletePlant = (req, res, next) => {
  const { id } = req.params;

  db.query("DELETE FROM plant WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }

    res.sendStatus(200);
  });
};

module.exports = {
  createNewPlant,
  getAllPlants,
  getPlantbyCommonName,
  updatePlant,
  deletePlant,
};
