# Twitter to dust

[![Build Status](https://travis-ci.org/agm-dev/twitter-to-dust.svg?branch=master)](https://travis-ci.org/agm-dev/twitter-to-dust)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5d019dcf7c224b5a980fdb9b7f79177e)](https://www.codacy.com/manual/agm-dev/twitter-to-dust?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=agm-dev/twitter-to-dust&amp;utm_campaign=Badge_Grade)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/agm-dev/twitter-to-dust)
![GitHub All Releases](https://img.shields.io/github/downloads/agm-dev/twitter-to-dust/total)
![GitHub](https://img.shields.io/github/license/agm-dev/twitter-to-dust)

Twitter to dust retrieves the last 200 tweets of the user account and removes those older than a given expiration time (in days). If a keyword is defined, it will keep the tweets that include that keyword in the text of the tweet.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/package/npm) (usually comes with Node.js).

## Installing

```bash
# clone the repository
git clone https://github.com/agm-dev/twitter-to-dust.git

# go into the directory and install the required packages
cd twitter-to-dust
npm install

# copy the .env.example and fill up the variables
cp .env.example .env
```

### Environment variables

| Name | Description |
|------|-------------|
| TWITTER_USERNAME | The Twitter username of the account |
| TWITTER_API_KEY | The API key from Twitter's dev portal |
| TWITTER_API_SECRET | The API secret from Twitter's dev portal |
| TWITTER_ACCESS_TOKEN | The access token from Twitter's dev portal |
| TWITTER_ACCESS_TOKEN_SECRET | The access token secret from Twitter's dev portal |
| DAYS_TO_DUST | The expiration time in days |
| DONT_DELETE_KEYWORD | The string (case sensitive) that avoids removing the tweet if it's included in the text of the tweet. |

## Tests

```bash
# exec this command to run the unit tests
npm run test

# this other one to check the coverage
npm run test:coverage
```

## Deployment

You can schedule this script to be run `n` times a day using `crontab` for instance.

The following example would run the script each 2 hours (at minute 0) and log the results of executions on `output.log`.

```bash
# 'crontab -e' on linux systems to add the following line
0 */2 * * * /usr/bin/node /absolute/path/to/the/script/index.js >> /absolute/path/to/the/script/output.log 2>&1
```

## Contributing

Just submit your pull request :)

## Versioning

This uses [semantic versioning](https://semver.org/).

## License

This software is licensed under the MIT license.
