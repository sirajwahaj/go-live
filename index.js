const port = 3002;
const express = require('express');
const app = express();
app.get('*'
    , (req, res) => res.send('Hello bird!'));
app.listen(port, () => console.log('Listening on port ' + port));