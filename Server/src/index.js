const { ApolloServer, gql } = require("apollo-server-express");
const { createWriteStream } = require("fs");
const path = require("path");
const express = require("express");
const { Storage } = require("@google-cloud/storage");

const files = [];

const typeDefs = gql`
  type Query {
    files: [String]
  }
  type Mutation {
    uploadFile(file: Upload!): Boolean
  }
`;

const gc = new Storage({
    keyFilename: path.join(__dirname, "/Users/rithin/WebstormProjects/Tweet-Detector-Updated/Server/tweetdetector-2798f64a0cce.json"),
    projectId: "tweetdetector"
});

const coolFilesBucket = gc.bucket("test-add-tweetdetector");

const resolvers = {
    Query: {
        files: () => files
    },
    Mutation: {
        uploadFile: async (_, { file }) => {
            const { createReadStream, filename } = await file;


            // await new Promise(res =>
            //     createReadStream()
            //         .pipe(
            //             coolFilesBucket.file(filename).createWriteStream({
            //                 resumable: false,
            //                 gzip: true
            //             })
            //         )
            //         .on("finish", res)
            // );

            if (filename != "undefined") {
                console.log("reached");
                await coolFilesBucket.upload(filename, {
                    // Support for HTTP requests made with `Accept-Encoding: gzip`
                    resumable: false,
                    gzip: true,
                    // By setting the option `destination`, you can change the name of the
                    // object you are uploading to a bucket.
                    metadata: {
                        // Enable long-lived HTTP caching headers
                        // Use only if the contents of the file will never change
                        // (If the contents will change, use cacheControl: 'no-cache')
                        cacheControl: 'public, max-age=31536000',
                    },
                });
            };

            console.log(`${filename} uploaded to ${bucketName}.`);

            files.push(filename);
            console.log(files);

            return true;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
app.use("/images", express.static(path.join(__dirname, "../images")));
server.applyMiddleware({ app });

app.listen(4000, () => {
    console.log(`🚀  Server ready at http://localhost:4000/`);
});