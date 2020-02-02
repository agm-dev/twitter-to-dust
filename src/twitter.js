const config = require('./config');

const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: config.TWITTER_API_KEY,
  consumer_secret: config.TWITTER_API_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET,
});

const params = {
  screen_name: config.TWITTER_USERNAME,
  include_rts: true,
  count: 200,
};

function deleteTweet(id) {
  console.log('BORRANDO TUIT: ', id);
  client.post(`statuses/destroy/${id}`, { id }, (error, tweets, response) => {
    if (!error) {
      console.log('response borrado:', tweets);
    } else {
      console.log(error);
    }
  });
}

// TODO: use promise version of these movida
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0]);
    const id = tweets[0].id_str;

    const ids = tweets.map(item => item.id_str);
  } else {
    console.log(error);
  }
});