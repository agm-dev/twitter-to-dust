const Twitter = require('twitter');
const config = require('./config');
const { log } = require('./utils');

const client = new Twitter({
  consumer_key: config.TWITTER_API_KEY,
  consumer_secret: config.TWITTER_API_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET,
});

const getUserTimeline = () => client.get('statuses/user_timeline', {
  screen_name: config.TWITTER_USERNAME,
  include_rts: true,
  count: 200,
});

const deleteTweet = tweet => {
  const id = tweet.id_str;
  return client.post(`statuses/destroy/${id}`, { id })
};

const shouldBeDeleted = tweet => {
  const tweetDate = new Date(tweet.created_at);
  const now = (new Date()).getTime();
  const msToExpire = config.DAYS_TO_DUST * 24 * 60 * 60 * 1000;

  const expirationTime = tweetDate.getTime() + msToExpire;

  return now >= expirationTime;
}

const deleteOldTweets = async () => {
  const tweets = await getUserTimeline();
  log(`retrieved ${tweets.length} tweets from user timeline`);
  const promises = tweets
    .filter(shouldBeDeleted)
    .map(deleteTweet);

  // TODO: use allSettled in the future
  log(`${promises.length} tweets to delete`);
  await Promise.all(promises);
  log('end');
}

module.exports = {
  deleteOldTweets,
};

