const mongoose=require('mongoose');
const connectDB=require('../database/db');
const method=require('method-override');

connectDB();

const express=require('express');
const app=express();
app.use(express.json());
app.use(method('_method'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');

const Productrouter=require('../route/ProductRouter');

app.use('/products',Productrouter);
app.listen(5002,()=>{
    console.log("Products Service est démarer sur  port 5002");
});