const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8081
const db = require('./queries')

// const local = "http://localhost:8081";
const all = "*";

// Avoiding CORS error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", all);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request,response)=>{
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`)
})

app.get('/data',db.getData);
app.get('/up',db.createEntry);