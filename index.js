const express = require('express');
const route = require('./route/route.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', route);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`listening @ port ${port}...`);
});
