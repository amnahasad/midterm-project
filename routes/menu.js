const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT name, description, price
    FROM menu_items
    WHERE availability = 'TRUE'
    `)
      .then(data => {
        const menuList = data.rows;
        const templateVars = {
          menuList
        };
        res.render('menu', templateVars);
      })

      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.get("/", (req, res) => {
    db.query(`SELECT name, description, price
    FROM menu_items
    WHERE availability = 'TRUE'
    `)
      .then(data => {
        const menuList = data.rows;
        res.json(menuList);
      })

      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

