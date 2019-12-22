const PORT = 3000;

const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express();

// Define paths for Express config
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
const publicDirectorPath = path.join(__dirname, '../public')


hbs.registerPartials(partialPath);

//Setup static directory to server
app.use(express.static(publicDirectorPath))

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);


app.get('',(request, response) =>{
    response.render('index',{
        title:'ROS',
        name:'Navid Sadeghi'
    })
});


app.get('*',(request, response)=>{
    response.render('404',{
        title: '404',
        name: 'Navid Sadeghi',
        errorMessage: 'Page not found',
    })
})
app.listen(PORT,()=>{
    console.log('server is up on port ' + PORT);
})