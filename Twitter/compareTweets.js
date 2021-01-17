const getUserTweets = require('./twitterGetTweetsFromUser');
const main = require('../Google Cloud/quickStartGoogleCloudVisionTextGet')

const tweets = getUserTweets();
const text = main();

function determineGenuineTweet() {
    const isGenuine = false;
    for (i = 0; i < tweets.length; i++) {
        if (text === tweets) {
            isGenuine = true;
        }
    }
    return isGenuine;
}

determineGenuineTweet();