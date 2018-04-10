
 function GenericException(err,data)
 {
     console.log("This is generic exception, Error details are as" + err);
 }

function ErrorFirstCallBack(err,data){
    if(err){
        console.error('Exception occure, details are as below \n',err.stack);
        return;
      }
      console.log(data);
}

function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
}

module.exports ={ErrorFirstCallBack,GenericException,logErrors};