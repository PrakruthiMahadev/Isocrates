let express = require('express');
let mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://prakruthim:IFZssz912SGI2uFP@cluster0.fnmudu7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((x)=>{
    console.log('Connected to DB');
})
.catch((err)=>{
    console.log('Error conecting to DB');
});
const app = express();
const server = app.listen(4000,()=>{
    console.log('Connected to DB');
});