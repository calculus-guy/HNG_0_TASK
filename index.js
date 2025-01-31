require('dotenv').config();
const express = require('express');
const cors = require('cors');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    const responseData = {
        email: process.env.EMAIL,
        current_datetime: moment().toISOString(),
        github_url: "https://github.com/calculus-guy/HNG_0_TASK"
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(responseData, null, 2));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});