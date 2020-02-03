const { deleteOldTweets } = require('./src/twitter');
const { log } = require('./src/utils');

deleteOldTweets().catch(err => log('[ERROR]', err));
