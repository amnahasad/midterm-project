const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT menu_items.id AS customer_order, comments, quantity, item_total AS total
    FROM order_items
    JOIN orders ON order_id = orders.id
    JOIN menu_items ON menu_item_id = menu_items.id;`)
      .then(data => {
        const viewOrder = data.rows[0];
        console.log("HERE---------->>>", viewOrder);
        const templateVars = {
          viewOrder
        }
        res.render('viewOrder', templateVars)

      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
