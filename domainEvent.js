
const fs = require('fs'),
domain = require("domain").create(),
path = require('path'),
  filePath= path.join(__dirname, 'calculate1.js');
  
domain.run(function(){
    fs.readFile(filePath,"utf8",(err,data)=>{
        if(err){
           throw err;
           //console.log(err.stack)
        }
        console.log(data);
    });
});

domain.on("error",(err)=>{
    console.log("Excetion: Exception caught on error method \n " +err.stack);
    process.exit()
});


process.on("uncaughtException",function(err){
    console.log("Exception: File not found");
})

