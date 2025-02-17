import { MongoClient, ServerApiVersion } from 'mongodb';

const URI = 'mongodb+srv://leonardofelizate:Z3VD7JyUYsX8mmkQ@cluster0.nwipc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const db = client.db('spotifyImpacta');
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);