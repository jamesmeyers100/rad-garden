const db = require("../db");

const createNewGarden = (req, res, next) => {
  const { name, zipcode } = req.body;

  db.query(
    "INSERT INTO garden (name, zipcode) VALUES ($1, $2)",
    [name, zipcode],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.sendStatus(201);
    }
  );
};

const getAllGardens = (req, res, next) => {
  const { name, zipcode } = req.body;

  db.query("SELECT id, name, zipcode FROM garden", [], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).json(results.rows);
  });
};

const getGarden = (req, res, next) => {
  const { id } = req.params;

  db.query(
    "SELECT id, name, zipcode FROM garden WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(results.rows);
    }
  );
};

const updateGarden = (req, res, next) => {
  const { id } = req.params;
  const { name, zipcode } = req.body;

  db.query(
    "UPDATE garden SET name = $1, zipcode = $2 WHERE id = $3",
    [name, zipcode, id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.sendStatus(200);
    }
  );
};

const deleteGarden = (req, res, next) => {
  const { id } = req.params;

  db.query("DELETE FROM garden WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }

    res.sendStatus(200);
  });
};

module.exports = {
  createNewGarden,
  getAllGardens,
  getGarden,
  updateGarden,
  deleteGarden,
};
