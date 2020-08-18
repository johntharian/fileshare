const path=require('path');

const express = require('express');

// const rootDir=require('../util/path');
const sendData=require('./send');

const router = express.Router();

router.get('/read',(req,res,next)=>{
    const data=sendData.data;
    res.render('read',{
        data:data
    });
    console.log(data.message);
});

module.exports = router;