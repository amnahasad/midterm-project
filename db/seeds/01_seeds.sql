-- Users table seeds here (Example)
INSERT INTO customers (name, phone) VALUES ('Alice', '6475649999');
INSERT INTO customers (name, phone) VALUES ('Kira', '6549873689');
INSERT INTO customers (name, phone) VALUES ('Bob', '3485042734');
INSERT INTO customers (name, phone) VALUES ('Sponge', '9842953864');
INSERT INTO customers (name, phone) VALUES ('Squarepants', '3069385766');


INSERT INTO drinks (name, price)
VALUES
('coffee', 8),
('hot chocolate', 5),
('iced macchiato', 8),
('tropical green smoothie', 8),
('freshly squeezed orange juice', 7);



INSERT INTO meals (main_course, side_dish, baked_goods, house_special, price)
VALUES
(NULL, NULL, 'chocolate croissant', 'cheese and broccoli soup', 35),
(NULL, 'garden salad', 'ch  ocolate chip muffin', NULL, 60),
('waffling', NULL, NULL, NULL, 18),
('pancakes', 'fruit salad', NULL, NULL, 25),
('smoked salmon egg benedict', 'fruit salad', 'cheese croissant', NULL, 80);





-- INSERT INTO orders (quantity, comments, total, confirmation, wait_time, order_ready, customer_id, order_item_id)
-- VALUES (2, "No pickles", 50, 4382, 20, false, 1, )

