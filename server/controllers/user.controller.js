/* eslint-disable camelcase */
const db = require("../db");

const getAllUsers = (req, res, next) => {
  db.query("SELECT * FROM userTable", [], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res, next) => {
  const { user_id } = req.params;

  db.query(
    "SELECT * FROM userTable WHERE id = $1",
    [user_id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(results.rows);
    }
  );
};

const createNewUser = (req, res, next) => {
  const { username, email, garden_id, growing_zone, member_since } = req.body;

  db.query(
    "INSERT INTO userTable (username, email, garden_id, growing_zone, member_since) VALUES ($1, $2, $3, $4, $5)",
    [username, email, garden_id, growing_zone, member_since],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.sendStatus(201);
    }
  );
};

const deleteUser = (req, res, next) => {
  const { user_id } = req.params;

  db.query(
    "DELETE FROM userTable WHERE user_id = $1",
    [user_id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.sendStatus(200);
    }
  );
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
