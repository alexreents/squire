const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "qpLnvieOSy95KDkmItkEiwfsi",
  TWITTER_CONSUMER_SECRET: "cguDa4akCHyFKSOYiy1xYzT5ao9uo5hEwFKQ2vSYxbl8o5b5hW",
  TWITTER_ACCESS_TOKEN: "SOME ACCESS TOKEN",
  TWITTER_TOKEN_SECRET: "SOME TOKEN SECRET"
};

const MONGODB = {
  MONGODB_URI: "mongodb+srv://squire-admin:TXub96SQZwVVJrKV@squirecluster.azf6i.azure.mongodb.net/squire?retryWrites=true&w=majority"
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