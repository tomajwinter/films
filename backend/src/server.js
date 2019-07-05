const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const filmRoutes = express.Router();

let Film = require('./film.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

filmRoutes.route('/').get(function(req, res) {
    Film.find(function(err, films) {
        if (err) {
            console.log(err);
        } else {
            res.json(films);
        }
    });
});

filmRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Film.findById(id, function(err, film) {
        res.json(film);
    });
});

filmRoutes.route('/add').post(function(req, res) {
    let film = new Film(req.body);
    film.save()
        .then(film => {
            res.status(200).json({'film': 'film added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new film failed');
        });
});

filmRoutes.route('/update/:id').post(function(req, res) {
    Film.findById(req.params.id, function(err, film) {
        if (!film)
            res.status(404).send("data is not found");
        else
            film.film_title = req.body.film_title;
            film.film_year = req.body.film_year;
            film.film_director = req.body.film_director;
            film.save().then(film => {
                res.json('Film updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/films', filmRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
