module.exports=(req,res,next)=>{
    console.log(`FROM LOGGER ===> path: ${req.path}  method: ${req.method}`);

    req.from_logger='hello from logger';
    next();
}