const PORT = 3000;

const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express();

// Define paths for Express config
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

hbs.registerPartials(partialPath);

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);

app.get('',(request, response) =>{
    response.render('index',{
        title:'ROS',
        name:'Navid Sadeghi'
    })
});


app.listen(PORT,()=>{
    console.log('server is up on port ' + PORT);
})