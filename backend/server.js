require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const connection = require("./config/database");
require("./models/users.model");

const uri = process.env.DB_STRING;

require("./config/passport");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionStore = new MongoStore({
  mongoUrl: uri,
  mongooseConnection: connection,
  collection: "sessions",
});

app.use(
  session({
    secret: "it is secret and now",
    cookie: {
      maxAge: 100 * 60 * 24 * 60 * 60, // 1 week
    },
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//
