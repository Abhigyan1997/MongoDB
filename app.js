const express = require('express');
const mongoConnect=require('./util/database').mongoConnect;
const app = express();

mongoConnect(()=>{
    app.listen(3000);
});
    
