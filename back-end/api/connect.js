import { MongoClient } from 'mongodb';

const URI = 'mongodb+srv://leonardofelizate:@Leo141996@cluster0.nwipc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(URI);

export const db = client.db('spotifyImpacta');
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);