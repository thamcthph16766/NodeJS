const http = require('http');
const express = require('express');

const app = express();

const check = (req, res, next) => {
    const status = true;
    if (status){
        console.log("Hello")
        next();
    }else{
        console.log("Sai");
    }
}

app.get('/api/products', check, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"},
    ];
    res.json(products);
})

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