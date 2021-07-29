const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const routes = require('./routes/user')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
mongoose
    .connect('mongodb://localhost:27017/user', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => {
        console.log('Database connected!');
    }
    )
    .catch((err) => console.log(err));
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/', routes)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})