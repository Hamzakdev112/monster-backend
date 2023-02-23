const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/schema/user");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "95768016127-dsemmaj0bijmr7g0nn28lauupvimudpd.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:4500/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // return profile
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          const user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          });
          user.save().then((newUser) => {
            done(null, newUser);
          });
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

module.exports = passport;
