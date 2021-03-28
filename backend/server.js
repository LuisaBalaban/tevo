const express = require('express')
var app = express()
const startRoute = require('./src/routes/start.route')
app.use(express.json());

app.use('/start', startRoute);
app.use(express.urlencoded({
    extended:false
}))


app.listen(3000);
