const path = require('path')

const express = require('express');

// const rootDir=require('../util/path');

const router = express.Router();

router.get('/home',(req,res,next)=>{
    res.render('home');
});

router.post('/home',(req,res,next)=>{
    
});

module.exports = router;