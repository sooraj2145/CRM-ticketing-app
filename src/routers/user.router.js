const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
    res.json({
        message: 'Hello, World! from user!'
    });
});

module.exports = router;