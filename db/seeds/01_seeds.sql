-- Users table seeds here (Example)
INSERT INTO customers (name, phone)
VALUES ('Alice', '6475649999'),
('Kira', '6549873689'),
('Bob', '3485042734'),
('Sponge', '9842953864'),
('Squarepants', '3069385766');


INSERT INTO restaurants (name, phone, created_at)
VALUES ('Garden Cafe', '8349385555', '2021-01-25 9:30:20');


INSERT INTO menu_items (restaurant_id, name, description, availability, price, food_type)
VALUES
(1, 'coffee', 'description', TRUE, 8, 'drink'),
(1, 'hot chocolate', 'description', TRUE, 5, 'drink'),
(1, 'iced macchiato', 'description', TRUE, 8, 'drink'),
(1, 'strawberry lemonade', 'description', TRUE, 9, 'drink'),
(1, 'tropical green smoothie', 'description', TRUE, 8, 'drink'),
(1, 'freshly squeezed orange juice', 'description', TRUE, 7, 'drink'),
(1, 'cheese and broccoli soup', 'description', TRUE, 25, 'food'),
(1, 'garden salad', 'description', TRUE, 15, 'food'),
(1, 'fruit salad', 'description', TRUE, 15, 'food'),
(1, 'pancakes', 'description', TRUE, 18, 'food'),
(1, 'smoked salmon egg benedict', 'description', TRUE, 40, 'food'),
(1, 'chocolate croissant', 'description', TRUE, 7, 'food'),
(1, 'waffling', 'description', TRUE, 18, 'food'),
(1, 'pasta','description', TRUE, 30, 'food'),
(1, 'cheese croissant', 'description', TRUE, 7, 'food'),
(1,'chocolate chip muffin', 'description', TRUE, 7, 'food');


INSERT INTO orders (restaurant_id, customer_id, total, wait_time, order_ready)
VALUES
(1, 1, 50, '2021-03-24 21:14:56', false),
(1, 2, 50, '2021-03-25 21:17:56', false),
(1, 3, 50, '2021-04-26 21:23:56', false),
(1, 4, 50, '2021-10-15 21:23:56', false),
(1, 5, 50, '2021-03-21 21:10:56', false);


INSERT INTO order_items (order_id, menu_item_id, comments, quantity, item_total)
VALUES (1, 1, 'comments', 1, 234),
(2, 2, 'comments', 1, 234),
(3, 3, 'comments', 1, 234),
(4, 4, 'comments', 1, 234),
(5, 5, 'comments', 1, 234);
