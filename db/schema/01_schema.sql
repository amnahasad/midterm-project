-- Drop and recreate customers table (Example)

DROP TABLE IF EXISTS customers CASCADE;
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL
);


DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  meal_id INTEGER REFERENCES meals(id) ON DELETE CASCADE,
  drink_id INTEGER REFERENCES drinks(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  comments TEXT,
  total INTEGER NOT NULL,
  confirmation INTEGER NOT NULL,
  wait_time TIMESTAMP,
  order_ready BOOLEAN,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  order_item_id INTEGER REFERENCES order_items(id) ON DELETE CASCADE
);


DROP TABLE IF EXISTS meals CASCADE;
CREATE TABLE meals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL
);


DROP TABLE IF EXISTS drinks CASCADE;
CREATE TABLE drinks (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL
);


DROP TABLE IF EXISTS order_items CASCADE;
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  meal_id INTEGER REFERENCES meals(id) ON DELETE CASCADE,
  drink_id INTEGER REFERENCES customers(id) ON DELETE CASCADE
);
