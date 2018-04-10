const express = require('express');
const app =express();
const morgan = require('morgan');

console.log('hi.........')

app.use(morgan(dev));



app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=400;
    // forward the error request
    next(error);
});

/**
 * having first object as error
 */
app.use((error,req,res,next)=>{
    // console.log(error.message);
    // console.log(error.stack);
    // res.status(error.status || 500).send('Exception identified!');

    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message,
            errorCode : error.status
        }
    });
});

