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
    res.send('Every Thing Is Working Good')
});

app.get("/person",validatorMeddleware, (req, res) => {
    const name = req.query.name;
    res.json({
      name:name
    });
  });


// app.get('/person',(req,res)=>{
//     //http://localhost:3004/person?name=siham
//     let stringQuery={name:req.query.name}
//     if(stringQuery!==undefined)
//     {res.status(200).json(stringQuery)}
//     else{ errorHandler();}
// })

app.post('/bad', (req, res) => {
    let num=10;
    num.forEach(x=>{console.log(x)})
    res.send('this is a bad route')
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
