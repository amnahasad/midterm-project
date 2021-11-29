-- Users table seeds here (Example)
INSERT INTO customers (name, phone)
VALUES ('Alice', '6475649999'),
('Kira', '6549873689'),
('Bob', '3485042734'),
('Sponge', '9842953864'),
('Squarepants', '3069385766');


INSERT INTO drinks (name, price)
VALUES
('coffee', 8),
('hot chocolate', 5),
('iced macchiato', 8),
('tropical green smoothie', 8),
('freshly squeezed orange juice', 7);



INSERT INTO meals (name, price)
VALUES
(NULL, NULL, 'chocolate croissant', 'cheese and broccoli soup', 35),
(NULL, 'garden salad', 'chocolate chip muffin', NULL, 60),
('waffling', NULL, NULL, NULL, 18),
('pancakes', 'fruit salad', NULL, NULL, 25),
('smoked salmon egg benedict', 'fruit salad', 'cheese croissant', NULL, 80);


INSERT INTO order_items (meal_id, drink_id)
VALUES (1, 1),
(2, 2),
(3, 3),
(4, 4),
(5,5);


INSERT INTO orders (quantity, comments, total, confirmation, wait_time, order_ready, customer_id, order_item_id)
VALUES (2, null, 50, 4382, '2021-03-24 21:14:56', false, 1, 1),
(2, 'No onions', 50, 4382, '2021-03-25 21:17:56', false, 2, 2),
(2, 'extra maple syrup', 50, 4382, '2021-04-26 21:23:56', false, 3, 3),
(2, 'extra chocolate chips', 50, 4382, '2021-10-15 21:23:56', false, 4, 4),
(2, 'extra salmon', 50, 4382, '2021-03-21 21:10:56', false, 5, 5);
