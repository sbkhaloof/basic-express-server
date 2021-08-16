'use strict'

const express = require('express');
const app=express();
app.use(express.json())

// require error handler
const errorHandler=require('./error-handlers/500');
const notFoundHandler=require('./error-handlers/404');

// requier middleware
const loggerMiddleware=require('./middleware/logger.js');
const validatorMeddleware=require('./middleware/validator.js')


app.use(loggerMiddleware)
// app.use(validatorMeddleware)

app.get('/', (req, res) => {
    res.status(200).send('Every Thing Is Working Good')
});


app.get('/person',(req,res)=>{
    //http://localhost:3004/person?name=siham
    let stringQuery={name:req.query.name}
    if(stringQuery!==undefined)
    {res.status(200).json(stringQuery)}
    else{ errorHandler();}
})

app.get('/bad', (req, res, next) => {
    next('error from bad end point');
})

app.use('*',notFoundHandler)
app.use(errorHandler);
module.exports={

    server:app,
    start:port=>
    {   
        app.listen(port,()=>console.log(`server is up on port ${port}`))
    }
}
