const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportSetup = require("./config/twitter-passport");
const path = require("path");
const authRoutes = require("./routes/api/twitter-auth");
const keys = require("./config/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header
const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));



  app.use(
    cookieSession({
      name: "session",
      keys: [keys.COOKIE_KEY],
      maxAge: 24 * 60 * 60 * 100
    })
  );
  
  // parse cookies
  app.use(cookieParser());
  
  // initalize passport
  app.use(passport.initialize());
  // deserialize cookie from the browser
  app.use(passport.session());
  
  // set up cors to allow us to accept requests from our client
  app.use(
    cors({
      origin: "http://localhost:3000", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    })
  );
  

// set up twitter routes
app.use("/auth", authRoutes);

// passport config
require("./config/passport")(passport);

// squire app routes 
app.use("/api/users", users);


const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/dashboard", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
