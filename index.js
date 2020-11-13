const express = require('express')
const app = express();
const cors = require('cors')
const moviesJson = require('./Utils/Assets/movies.json');

app.use(cors())

app.get('/', (req, res) => {
    try {
        const { Akelab } = req.query;
        if (!Akelab) {
            res.sendStatus(404);
            return res.json({ error: true, errorMsg: "Por favor envíe el código Akelab." })
        }

        res.status(200);
        return res.json({ data: moviesJson, error: false, errorMsg: "" });

    } catch (exception) {
        console.log(exception)
    }
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});