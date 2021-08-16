'use strict'
module.exports=(req,res,next)=>{
    console.log(`request method ${req.method} and request path is ${req.path}`);
    next();
}