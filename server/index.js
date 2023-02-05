const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const middlewares = require("./middlewares/index");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");
// const session = require("express-session");
var session = require("cookie-session");
const dbm = require("./db");

dbm.on("error", console.error.bind(console, "MongoDB connection error:"));
var compression = require("compression");
var RateLimit = require("express-rate-limit");

app.use(compression());
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000","http://172.20.10.2:3000"
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000","http://172.20.10.2:3000"
//     ],
//     methods: ["GET", "POST", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);
routes(app);
// errors(app);
const port = 3200;

app.listen(port, () => {
  console.log("running Main server");
});

// app.listen(3001, () => {
//   console.log("running Main server");
// });
