import { db } from "./connect.js";

async function insertArtists (artists) {
    return db.collection('artists').insertMany(artists);
}

async function insertSongs (songs) {
    return db.collection('songs').insertMany(songs);
}

export { insertArtists, insertSongs }