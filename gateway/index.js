const express = require('express');
const {createProxyMiddleware}=require('http-proxy-middleware');
const routerOrd=require('../services/route/orderRouter');
const routerPro=require('../services/route/ProductRouter');

const app = express();
const prot=5000;

// import des URLs
const {orders_API_URL,products_API_URL}=require('./URLs');

// configuration du proxy pour les commandes
const ordersProxy=createProxyMiddleware({
    target:orders_API_URL,
    changeOrigin:true,
});

const produitsProxy=createProxyMiddleware({
    target:products_API_URL,
    changeOrigin:true,
});

// Route Gateway pour les commandes
app.get('/',(req,res)=>{
    res.send("Bienvenu sur API Gateway");
});

// Redirection vers microservice 
app.use('/orders',ordersProxy);
app.use('/products',produitsProxy);

app.listen(prot,()=>{
    console.log(`API Gateway est démaré sur le port ${prot}`);
});