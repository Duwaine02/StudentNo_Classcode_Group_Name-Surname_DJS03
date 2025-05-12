const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static(__dirname));

app.get('/api/data', (req, res) => {

    const data = require('./data.js');
    res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
