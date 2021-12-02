// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const homePageRoutes = require("./routes/homePage");
const usersRoutes = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");
const root = require("./routes/root");
const menuRoutes = require("./routes/menu");
const viewOrderRoutes = require("./routes/viewOrder");
// console.log(root);

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/homePage", homePageRoutes(db));
app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
// app.use("/api/menu", menuRoutes(db));
app.use("/menu", menuRoutes(db));
app.use("/viewOrder", viewOrderRoutes(db));
app.use("/", root(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).



//--- Below is Twilio API

app.get("/sendSMS", (req, res) => {
  const accountSid = 'AC03c42d9f66b64bb62640869a13a2ad75'; // Your Account SID from www.twilio.com/console
  const authToken = '6e24a1900aa7bf355b8c5e5a6dd83c72'; //process.env.TWILIO_AUTH_TOKEN //  Your Auth Token from www.twilio.com/console

  const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: 'Thank you for your order and choosing Garden Café',
      to: '+16476486167', // Text this number
      from: '+12264074073', // From a valid Twilio number
    })
    .then(() =>

    res.redirect('/'));

});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
