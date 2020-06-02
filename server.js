const express = require('express');

const app = express();

app.use(express.static('./dist/UnNuevoAmanecer'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/UnNuevoAmanecer/'}),
);

app.listen(process.env.PORT || 8080);