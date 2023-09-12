const { query } = require("./mysqlConnect");

add = async (data) => {
    let ferramentas = await query(`SELECT * FROM ferramentas WHERE codigo = '${data.codigo}' OR serie = '${data.serie}'`)

    if (ferramentas){
        if (ferramentas[0]){
            return { message: "Produto já cadastrado", success: "false" };
        }
    }
        
    await query(
        `
        INSERT INTO ferramentas (
            codigo,
            serie,
            descricao,
            nome,
            img
        )
        VALUES(
            '${data.codigo}',
            '${data.serie}',
            '${data.descricao}',
            '${data.nome}',
            '${data.img}'
        )
        `
    )	

    return { message: "Ferramenta cadastrada", success: true }

}

update = async (data) => {

    let ferramentas = await query(`SELECT * FROM ferramentas WHERE codigo = '${data.codigo}' OR serie = '${data.serie}' OR nome = '${data.nome}'`)

    if (ferramentas){
        if (ferramentas[0]){

            serie = data.serie || ferramentas[0].serie;
            descricao = data.descricao || ferramentas[0].descricao;
            nome = data.nome || ferramentas[0].nome;
            img = data.img || ferramentas[0].img;
            codigo = data.codigo;

            await query(
                `
                    UPDATE ferramentas 
                    SET 
                        codigo = '${codigo}',
                        serie = '${serie}',
                        descricao = '${descricao}',
                        nome = '${nome}',
                        img = '${img}'
                    WHERE
                        codigo = '${codigo}'

                `
            )

            return { message: "Produto alterado", success: true };
            
        }else{
            return { message: "Produto não cadastrado", success: "false" };
        }
    }else{
        return { message: "Produto não cadastrado", success: "false" };
    }

}

delet = async (data) => {

    let ferramentas = await query(`SELECT * FROM ferramentas WHERE codigo = '${data.codigo}'`)

    if (ferramentas){
        if (ferramentas[0]){

            await query(
                `
                    DELETE FROM ferramentas WHERE codigo = '${data.codigo}'
                `
            )

            return { message: "Produto deletado", success: true }
            
        }else{
            return { message: "Produto não cadastrado", success: false };
        }
    }else{
        return { message: "Produto não cadastrado", success: false };
    }

}

module.exports = { add, delet, update }
