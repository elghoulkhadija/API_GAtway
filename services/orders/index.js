const express=require('express');
const methodOver=require('method-override')

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(methodOver('_method'));
const connectDB=require('../database/db');
connectDB();
const Orderrouter=require('../route/orderRouter');
app.use('/orders',Orderrouter);
app.listen(5001,()=>{
    console.log("Orders Service est démarer sur port 5001");
});