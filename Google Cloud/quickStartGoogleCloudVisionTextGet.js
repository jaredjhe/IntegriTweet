
// https://cloud.google.com/docs/authentication/getting-started#windows
// export GOOGLE_APPLICATION_CREDENTIALS="/Users/rithin/WebstormProjects/Tweet-Detector-Updated/Google Cloud Credentials/rithin2/tweetdetector-2798f64a0cce.json"

const quickstart = async () => {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    const [result] = await client.textDetection('./Google Cloud/resources/Ben_Shapiro_True_1.png');
    const text = result.textAnnotations;
    const textAsArray = [];
    text.forEach(text => textAsArray.push(text.description));
    return textAsArray;
}

'use strict';
const main = async () => {
    // [START vision_quickstart]
    const words = await quickstart();
    const paragraph = parseTextAsArray(words[0]);
    console.log(paragraph);
    return paragraph;
    // [END vision_quickstart]
}

function parseTextAsArray(word) {
    let array = word.split(/\r?\n/);
    return array.slice(1, array.length - 5);
}

process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
});

main(...process.argv.slice(2));

module.exports = main; 