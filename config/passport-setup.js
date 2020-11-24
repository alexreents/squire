const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");
const User = require("../models/User.js");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/redirect"
    },
    

    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel
      const currentUser = await User.findOne({
        email: "q@q.com"
      });

      
      // create new user if the database doesn't have this user
      //if (!currentUser) {

        const filter = { email: 'q@q.com' };
        const update = 
        {   
            twitterScreenName: profile._json.screen_name,
            twitterId: profile._json.id_str,
            twitterProfileImageUrl: profile._json.profile_image_url,
            twitterAccessToken: token,
            twitterTokenSecret: tokenSecret
        };

        // `doc` is the document _after_ `update` was applied because of
        // `new: true`
        let doc = await User.findOneAndUpdate(filter, update, {
            new: true
        });

        /*
        const newUser = await new User({
            name: "Alex",
            email: "alex@live.com",
            password: "something",
            twitterScreenName: profile._json.screen_name,
            twitterId: profile._json.id_str,
            twitterProfileImageUrl: profile._json.profile_image_url,
            twitterAccessToken: token,
            twitterTokenSecret: tokenSecret
        }).save();
        if (newUser) {
          done(null, newUser);
        }
        */
      //}
      done(null, currentUser);
    }
  )
);
