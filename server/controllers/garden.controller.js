/* eslint-disable camelcase */
const db = require("../db");

const getAllGardens = (req, res, next) => {
  db.query("SELECT * FROM garden", [], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).json(results.rows);
  });
};

const getGardenByUserId = (req, res, next) => {
  const { user_id } = req.params;

  db.query(
    "SELECT * FROM garden WHERE user_id = $1",
    [user_id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(results.rows);
    }
  );
};

const createNewGarden = (req, res, next) => {
  const { garden_name, date_started, user_id, zone_id, zipcode_id } = req.body;

  db.query(
    "INSERT INTO garden (garden_name, date_started, user_id, zone_id, zipcode_id) VALUES ($1, $2, $3, $4, $5)",
    [garden_name, date_started, user_id, zone_id, zipcode_id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.sendStatus(201);
    }
  );
};

const deleteGarden = (req, res, next) => {
  const { garden_id } = req.params;

  db.query(
    "DELETE FROM garden WHERE garden_id = $1",
    [garden_id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.sendStatus(200);
    }
  );
};

module.exports = {
  createNewGarden,
  getAllGardens,
  getGardenByUserId,
  deleteGarden,
};
