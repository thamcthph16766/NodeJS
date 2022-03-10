const http = require('http');
// const express = require('express');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoute from '../routes/product';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use("/api", productRoute);




// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if(req.url === "/"){
//         res.setHeader('Conten-Type', "text/html");
//         res.write("<html><body><h1>Home</h1></body></html>")
//         res.end();
//     }else if(req.url === "/api/products"){
//         const products = [
//             {id: 1, name: "Product A"},
//             {id: 2, name: "Product B"},
//         ];
//         res.end(JSON.stringify(products));
//     }else{
//         console.log('Sai');
//     }
// });

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})