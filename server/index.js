require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const Auth0strategy = require("passport-auth0");
const massive = require("massive");
const bodyParser = require("body-parser");
const barCtrl = require("./barCtrl");

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: "evencoolerbeans",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

//space for end points
app.get("/api/bars", barCtrl.getAll);

passport.use(
  new Auth0strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/login",
      scope: "openid"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done({ clientID: user.id, email: user._json.email, name: user._json.name });
});

passport.deserializeUser((done, obj) => {
  done(null, obj);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

function authenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

const port = 3003;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
