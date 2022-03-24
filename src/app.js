const http = require('http');
// const express = require('express');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoute from '../routes/product';
import newRoute from '../routes/new';
import mongoose from 'mongoose';
import categoryRoute from '../routes/category';
import userRoute from '../routes/auth';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api", productRoute);
app.use("/api", newRoute);
app.use("/api", categoryRoute);
app.use("/api", userRoute);

mongoose.connect('mongodb://localhost:27017/web16309')
.then(() => console.log("Kết nối thành công"))
.catch((error) => console.log(error))


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