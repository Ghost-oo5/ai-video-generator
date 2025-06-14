const express = require('express')
const generations = require('./routes/generation') 
const app = express();
app.use(express.json())
app.use('/api/generations', generations)

app.get('/', (req, res)=>{
    res.send('Home Address')
})


module.exports = app;