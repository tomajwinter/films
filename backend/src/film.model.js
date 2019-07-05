const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Film = new Schema({
    film_title: {
        type: String
    },
    film_year: {
        type: String
    },
    film_director: {
        type: String
    }
});
module.exports = mongoose.model('Film', Film);
