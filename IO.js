
const fs = require('fs'),
path = require('path'),
  filePath= path.join(__dirname, 'Document.txt');

/**
 * Use to route specific message from user define function
 */
const exceptionMessage = require('./Exception');

/**
 * Read the file and throw the exception 
 */
fs.readFile(filePath,"utf8",(err,data)=>{
    if(err){
       throw err;
    }
    console.log(data);
});

/** Or we can use another way of callback function */
fs.readFile(filePath,"utf8",exceptionMessage.ErrorFirstCallBack);

/**
 * Catch uncaoght exception on process
 */
process.on("uncaughtException",function(err){
    console.log("File not found");
})