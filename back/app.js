const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const db = require('./models');
const passportConfig = require('./passport');
const userRouter = require('./routes/user');
dotenv.config()
const app=express();

db.sequelize.sync()
    .then(()=>{
        console.log('db connect success')
    })
    .catch(console.error);

app.use(cors({
    origin:'*',
    credential:false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res,next)=>{

})
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!');
});