const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const topMovies = [
    { title: 'American Psycho', director: 'Mary Harron' },
    { title: 'Halloween', director: 'John Carpenter' },
    { title: 'Mandy', director: 'Panos Cosmatos' },
    { title: 'Wild at Heart', director: 'David Lynch' },
    { title: 'Face/Off', director: 'John Woo' },
    { title: 'Rear Window', director: 'Alfred Hitchcock' },
    { title: 'Blood and Black Lace', director: 'Mario Bava' },
    { title: 'The Princess Bride', director: 'Rob Reiner' },
    { title: 'Die Hard', director: 'John McTiernan' },
    { title: 'Star Wars' , director: 'George Lucas'}
];

app.use(morgan('combined'));

app.use(express.static('public'));

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('These are my favorite movies. Go to /documentation.html to view the documentation.');
});

app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});