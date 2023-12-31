const express=require('express');
const userController=require("../controller/userController");

const userRouter = express.Router(); 

userRouter.get('/', async(req, res, next)=>{

    user = await userController.get(req.headers);

    res.status(200).send(user);

})
  
userRouter.get('/login', async(req, res, next)=>{

    let user = await userController.login(req.headers);
    
    res.status(200).send(user);

})

userRouter.post('/register', async(req, res, next)=>{

    let user = await userController.register(req.body);
    
    res.status(200).send(user);

})

module.exports=userRouter;