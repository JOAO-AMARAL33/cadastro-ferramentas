const userModel = require("../model/userModel");
const ferramentaModel = require("../model/ferramentaModel");

exports.addFerramenta = async (data)=>{
    
	let verify = await userModel.verifyJWT(data.token);

	if (verify.auth){

		return await ferramentaModel.add(data);

	}else{

		return { message: "Token invalido", success: false }

	}

}

exports.deleteFerramenta= async (data)=>{
	let verify = await userModel.verifyJWT(data.token);

	if (verify.auth){

		return await ferramentaModel.delet(data);

	}else{

		return { message: "Token invalido", success: false }

	}
}

exports.updateFerramenta= async (data)=>{
	let verify = await userModel.verifyJWT(data.token);

	if (verify.auth){

		return await ferramentaModel.update(data);

	}else{

		return { message: "Token invalido", success: false }

	}
}
