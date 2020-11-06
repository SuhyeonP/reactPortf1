const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Reviews } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/',async(req,res,next)=>{
    try{
        console.log(req.body)
        const exUser=await User.findOne({
            where: {
                email: req.body.email,
            }
        })
        if(exUser){
            return res.status(403).send('already using id')
        }
        const hashedPw=await bcrypt.hash(req.body.password,12)
        await User.create({
            userId:req.body.id,
            userName:req.body.name,
            userPw:hashedPw,
        })
        res.status(201).send('success');
    }catch(err){
        console.error(err)
        next(err)
    }
})

router.post('/login',async(req,res,next)=>{

})


module.exports = router;