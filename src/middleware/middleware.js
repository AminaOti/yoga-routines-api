
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv').config();;
const uri = process.env.MONGO_DB_URL
const client = new MongoClient(uri);

const connectToMongoDB = (async (req, res, next) => {
    try {
        await client.connect();
        console.log("Connected successfully to server");
    } catch (err) {
        throw new Error(err);
    }
    next();
})

const disconnectFromMongoDB = (async (req, res, next) => {
    try {
        await client.close()
        console.log("Disconnected successfully from MongoDB");
    } catch (err) {
        throw new Error(err);
    };
    next();
})



module.exports = { connectToMongoDB, disconnectFromMongoDB }
