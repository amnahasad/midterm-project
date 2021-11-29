
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {           //because Express strips the prefix of the menu route, the forward slash endpoint should be the full menu//
    db.query(`SELECT * FROM meals, drinks;`)
      .then(data => {
        const menu = data.rows;
        console.log(data)
        res.json({ menu });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
