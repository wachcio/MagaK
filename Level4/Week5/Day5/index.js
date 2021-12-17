const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017');

(async () => {
    await client.connect();
    const db = client.db('megak_music');

    const songs = db.collection('songs');

    const allSongs = await songs.find().toArray();

    console.log(allSongs);
})();
