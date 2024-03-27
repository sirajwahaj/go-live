const port = 3333;
const express = require('express');
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log('Listening on port ' + port));
