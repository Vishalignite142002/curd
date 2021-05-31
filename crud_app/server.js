const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');



const PORT = process.env.PORT||8000


app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
dotenv.config({path:'config.env'})

app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/add_user',(req,res)=>{
    res.render('add_user')
});
app.get('/update_user',(req,res)=>{
    res.render('update_user')
});

app.listen(PORT,()=>{
    console.log('server is running on 3000')
});