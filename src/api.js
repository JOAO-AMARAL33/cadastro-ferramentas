const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//  |  ROTAS  |  //
const route = require("./routers/route");
const ferramentoRoute = require("./routers/ferramenta");
const userRoute = require("./routers/user");

app.use('/', route);
app.use('/ferramenta', ferramentoRoute);
app.use('/user', userRoute);

module.exports=app;

