'use strict'
module.exports=(error,req,res,next) => {
const errMessege=error.message?error.message:error;
const errObj={
    status:500,
    message:errMessege
}
res.status(500).json(errObj)
}