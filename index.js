const port = 3333;
const express = require('express');
const app = express();
app.get('/'
    , (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
app.listen(port, () => console.log('Listening on port ' + port));