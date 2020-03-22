const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('index.pug',params)
})


app.listen(80,()=>{
    console.log('the app is running');   
})