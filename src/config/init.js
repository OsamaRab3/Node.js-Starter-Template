const CustomError = require('../utils/CustomError')
module.exports = {
    NotFound:(req,res,next)=>{
      const error = new CustomError (`Cannot find ${req.originalUrl} on this server`,404)
      next(error)
    },
    globalError:(error, req, res, next) => {
  
        error.statusCode = error.statusCode || 500;
        error.status = error.status || "error"
      
        res.status(error.statusCode).json({
          status:error.status,
          message:error.message
        })
    },
    
}