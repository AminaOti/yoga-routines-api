
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv').config();;



exports.getRoutine = (async (req, res, next) => {
    const uri = process.env.MONGO_DB_URL
    const client = new MongoClient(uri);
    try {
        const database = client.db(process.env.DATABASE);
        const table = database.collection(process.env.COLLECTION_NAME);
        const query = { ID: parseInt(req.params.id) };
        const data = await table.findOne(query);
        res.status(200).json({ success: true, data: data })
    } catch (err) {
        throw err;
    }
    next();
});

exports.getAllRoutines = (async (req, res, next) => {
    console.log(2)
    const uri = process.env.MONGO_DB_URL
    const client = new MongoClient(uri);
    try {
        const database = client.db(process.env.DATABASE);
        const table = database.collection(process.env.COLLECTION_NAME);
        const query = { ID: { $gt: 0 } };
        const data = await table.find(query);

        const dataToArray = await data.toArray()

        res.status(200).json({ success: true, data: dataToArray })

    } catch (err) {
        throw err;
    }
    next();
});


exports.getAllRoutineTitle = (async (req, res, next) => {
    console.log(2)
    const uri = process.env.MONGO_DB_URL
    const client = new MongoClient(uri);
    try {
        const database = client.db(process.env.DATABASE);
        const table = database.collection(process.env.COLLECTION_NAME);
        const query = { ID: { $gt: 0 } };
        const options = {
            projection: { assetName: 1 },
        };
        const data = await table.find(query);

        const dataToArray = await data.toArray()

        const routineTitle = dataToArray.map(routine => routine.title);

        res.status(200).json({ success: true, data: routineTitle })

    } catch (err) {
        throw err;
    }
    next();
});
