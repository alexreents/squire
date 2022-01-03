// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "gCVO3Xfd8ZZUd9G0MqBOhvSUg",
  TWITTER_CONSUMER_SECRET: "fsuhxn5uss18tsMOujK3CSKTyC3FSCocIYmz6BXLeTTkMngUOl",
  TWITTER_ACCESS_TOKEN: "826212035507523584-S5Hse02ly8kxI9zsTg8qGbR2ZLuRCxb",
  TWITTER_TOKEN_SECRET: "WaMYFYjSIk6Y3JkrRZyl61YrJaryVXPmmrEuLRoKzfiJl"
};

const DB_USER = "admin";
const DB_PASSWORD = "trainingsquire";
const MONGODB = {
  //MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds<SOME_DOMAIN>.mlab.com:<PORT>/<PROJECT_NAME>`
  MONGODB_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.tlfmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION,
  secretOrKey: "secret"
};

module.exports = KEYS;
