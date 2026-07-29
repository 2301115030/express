var express = require('express');
var router = express.Router();

const axios = require('axios');

router.get('/', async function(req, res, next) {
    try {
        const response = await axios.get(
            'https://dog.ceo/api/breeds/image/random'
        );
        res.render('dog', {
            title: 'Dog API',
            image: response.data.message
        });
    } catch(err) {
        next(err);
    }
});

module.exports = router;