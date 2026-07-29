const axios = require('axios');

var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        const response = await axios.get(
            "https://dog.ceo/api/breeds/image/random"
        );
        res.json(response.data);
    } catch(err) {
        next(err);
    }
});

module.exports = router;