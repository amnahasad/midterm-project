/* Shows all available drinks on menu*/
SELECT name, description, price
FROM menu_items
WHERE availability = 'TRUE'
AND food_type = 'drink';

/* Shows all available meals on menu*/

SELECT name, description, price
FROM menu_items
WHERE availability = 'TRUE'
AND food_type = 'food';

/* Shows confirmation # and summary of order */
SELECT order_items.id AS confirmation_number, comments, quantity,
item_total, orders.wait_time as wait_time, orders.order_ready as status
FROM order_items
JOIN orders ON order_id = orders.id;

