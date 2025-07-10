const express = require('express');
const app = express();

app.get('/testnode', (_req, res) => {
    res.status(200).send('Yes the testNode endpoint is working');
});

module.exports = app;




