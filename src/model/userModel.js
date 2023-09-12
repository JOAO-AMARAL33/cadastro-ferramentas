const { query } = require("./mysqlConnect");
const jwt = require("jsonwebtoken");


get = async()=>{

	let users = await mysql.query("SELECT * FROM users")

	return users;
}

register = async (body) => {

	const users = await  query(
		`
			SELECT * FROM users WHERE email = '${body.email}' AND senha = '${body.senha}'
		`
	);

	result = { message: "Usuario já cadastrado", success: false };

	if (users.length == 0){
		await query(
			`
				INSERT INTO users (email, senha) VALUES('${body.email}', '${body.senha}')
			`
		)

		return { message: "Usuario cadastrado", success: true }

	}else{
		return result;
	}

	return result;

}

login = async (data)=>{

	const users = await  query(
		`
			SELECT * FROM users WHERE email = '${data.email}' AND senha = '${data.senha}'
		`
	);

	result = { auth: false, token: null , user:null };

	if(users){
		if(users.length > 0){

			if(users[0].id_user){

				const id=users[0].id;

				let token = jwt.sign({id} , 'ferramentas', {expiresIn:28800}); 

				console.log("Login realizado, token criado!");
		
				result = { auth: true, token: token , user: users[0]};

			}else{
				return result;
			}
		}else{
			return result;
		}

	}else{
		return result;
	}

	console.log(`Result: ${result}`)

	return result;
}


verifyJWT= async (token)=>{ 

	console.log(token)

	if (!token){
		resp= { auth: false, message: 'Token não informado.' }; 
	}

	jwt.verify(token, 'ferramentas', 

		(err, decoded) => { 

			if (err)
				resp= { auth: false, message: 'Token inválido!' };
			
			if (decoded)
				resp= {auth:true, id_user:decoded.id};
			
		}

	);

	return resp;

} 

module.exports={get, login, register, verifyJWT}
