const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on Mac OS X, run the export command below from the terminal:
//// https://cloud.google.com/docs/authentication/getting-started#windows
// export BEARER_TOKEN='AAAAAAAAAAAAAAAAAAAAABpeLwEAAAAAP0GJmlBY%2BnDzcQixSH9IRvWazgA%3DVYKA3Hr6kh43URpxEftNKVgG5dCPfKAJ30SAMYn8Fj0QQ1thsQ'
const token = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/2/users/by?usernames="

async function getRequest(username) {

    const params = {
        usernames: username, // Edit usernames to look up
    }

    const res = await needle('get', endpointURL, params, { headers: {
            "authorization": `Bearer ${token}`
        }})

    if(res.body) {
        return res.body;
    } else {
        throw new Error ('Unsuccessful request')
    }
}

(async () => {

    try {
        // Make request
        const response = await getRequest("benshapiro");
        console.log(response)

    } catch(e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();

