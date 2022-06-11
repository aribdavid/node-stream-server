const express = require('express');
const movieController = require('./controller/movieController')


const app = express();


app.get('/movie', movieController.getMovie)

require('dotenv').config()
const port = process.env.PORT 

app.listen(port, () => console.log(`running at ${port}`));