const userModel=require("../model/userModel");

exports.get = async (headers)=>{

	auth = await userModel.verifyJWT(headers['x-access-token']);

	if(auth.id_user){

		if(headers.id_user == auth.id_user)
		
			resp = await userModel.get();

		else
			resp = {"status":"null", auth};
		

	}else{
		resp = {"status":"null", auth};
	}

	return resp;
}

exports.register = async (body) => {
	return await userModel.register(body);
}

exports.login = async (body) => {
  	return await userModel.login(body);
}