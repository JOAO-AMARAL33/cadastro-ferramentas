const express=require('express');

const ferramentaController=require("../controller/ferramentaController");

const { query } = require('../model/mysqlConnect');

const ferramentaRouter = express.Router(); 

ferramentaRouter.get('/', async (req, res, next)=>{

	let ferramentas = await query("SELECT * FROM ferramentas");
	res.status(200).send(ferramentas);

})

ferramentaRouter.post('/', async (req, res, next)=>{

	let resp = await ferramentaController.addFerramenta(req.body)

	res.status(200).send(resp);

})

ferramentaRouter.delete('/', async (req, res, next)=>{

	let resp = await  ferramentaController.deleteFerramenta(req.body)

	res.status(200).send(resp);

})

ferramentaRouter.put('/', async (req, res, next)=>{

	let resp = await ferramentaController.updateFerramenta(req.body)

	res.status(200).send(resp);

})
  
module.exports=ferramentaRouter;