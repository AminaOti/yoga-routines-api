
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv').config();;


// exports.getListOfFentiAssetNames = (async (req, res, next) => {
//     const data = ['Bitcoin', 'Ethereum', 'Polkadot', 'Solana']
//     res.status(200).json({ success: true, data: data })
// });



exports.getRoutine = (async (req, res, next) => {
    console.log(1)
    const uri = process.env.MONGO_DB_URL
    const client = new MongoClient(uri);
    try {
        const database = client.db(process.env.DATABASE);
        const table = database.collection(process.env.COLLECTION_NAME);
        const query = { ID: 1 };
        const data = await table.findOne(query);
        res.status(200).json({ success: true, data: data })
    } catch (err) {
        throw err;
    }
    next();
})
