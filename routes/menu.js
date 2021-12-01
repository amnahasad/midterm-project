const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT name, description, price
    FROM menu_items
    WHERE availability = 'TRUE'
    AND food_type = 'drink';`)
      .then(data => {
        const drinks = data.rows;
        db.query(`SELECT name, description, price
        FROM menu_items
        WHERE availability = 'TRUE'
        AND food_type = 'food';`)
          .then(menuData => {
            console.log(menuData)
            const foods = menuData.rows;
            const templateVars = {
              drinks,
              foods
            }
            res.render('menu', templateVars)
          })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}
