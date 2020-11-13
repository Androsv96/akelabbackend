const express = require('express')
const app = express();
const cors = require('cors')
const moviesJson = require('./Utils/Assets/movies.json');
const { AKELAB } = require('./Utils/Constants');

app.use(cors())

app.get('/', (req, res) => {
    try {
        const { Akelab } = req.query;
        if (!Akelab) {
            res.status(404);
            return res.json({ error: true, errorMsg: "Por favor envíe el código Akelab." });
        }

        if (AKELAB !== Akelab) {
            res.status(403);
            return res.json({ error: true, errorMsg: "Por favor envíe el código correcto de Akelab." });
        }

        res.status(200);
        return res.json({ data: moviesJson, error: false, errorMsg: "" });

    } catch (exception) {
        console.log(exception)
        res.status(500);
        return res.json({ error: true, errorMsg: "Hubo un error" });
    }
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Example app listening on port 8000!')
});