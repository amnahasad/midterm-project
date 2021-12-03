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

const homePageRoutes = require("./routes/homePage");
const usersRoutes = require("./routes/users");
const root = require("./routes/root");
const menuRoutes = require("./routes/menu");
const viewOrderRoutes = require("./routes/viewOrder");



app.use("/homePage", homePageRoutes(db));
app.use("/api/users", usersRoutes(db));
app.use("/menu", menuRoutes(db));
app.use("/viewOrder", viewOrderRoutes(db));
app.use("/", root(db));


app.get("/sendSMS", (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;

  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);
  client.messages
    .create({
      body: 'Thank you for your order and choosing Lounge Café. Your order will be ready in 20 minutes.',
      to: process.env.PHONE_NUMBER,
      from: '+12267733762',
    })
    .then(() => {
      res.send('hello')
      // res.redirect('/')
      console.log(message.sid)
    });
})


app.listen(PORT, () => {
  console.log(`Lounge Café app listening on port ${PORT}`);
});
