const express = require('express');

const app = express();

app.use(express.static('./dist/un-nuevo-amanecer'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/un-nuevo-amanecer/'}),
);

app.listen(process.env.PORT || 8080);const express = require('express');

const app = express();

app.use(express.static('./dist/un-nuevo-amanecer'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/un-nuevo-amanecer/'}),
);

app.listen(process.env.PORT || 8080);