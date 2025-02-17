import { insertArtists, insertSongs } from '../api/insertMany.js';
import { artistArray }from './artists.js'
import { songsArray } from './songs.js';

insertArtists(artistArray);
insertSongs(songsArray);