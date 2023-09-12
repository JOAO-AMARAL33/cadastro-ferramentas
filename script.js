const md5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
const sqlRegex = /\s*([\0\b\'\"\n\r\t\%\_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[\=\>\<=\!\~]+.+)|(let\s+.+[\=]\s*.*)|(begin\s*.*\s*end)|(\s*[\/\*]+\s*.*\s*[\*\/]+)|(\s*(\-\-)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[\;]\s*)*)+/


async function login(email, senha){

    // Example request options
    const result = await fetch("http://localhost:3000/user/login", {
        method: 'get', 
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
            'email': email,
            'senha': senha
        })
    })

    res = await result.json()

    if (res.auth){

        alert("Login realizado com sucesso.");
        localStorage.setItem("token", res.token);

    }else{
        alert("Credencias incorretas");
    }

}

async function register(email, senha){

    // Example request options
    const result = await fetch("http://localhost:3000/user/register", {
        method: 'post', 
        body: JSON.stringify({email: email, senha: senha}),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    res = await result.json()

    if (res.success){

        alert(res.message);

    }else{

        alert(res.message);

    }

}
addEventListener("click", 
    async e => {

        //CONFIRMAR CADASTRO DE PRODUTO
        if (e.target == document.querySelector("#confirm")){

            let codigo = document.querySelector("#codigo").value;
            let serie = document.querySelector("#serie").value;
            let nome = document.querySelector("#nome").value;
            let desc = document.querySelector("#desc").value;
            let img = document.querySelector("#img").value;

            if (codigo.match(sqlRegex) || serie.match(sqlRegex) || nome.match(sqlRegex) || desc.match(sqlRegex) || img.match(sqlRegex) ){
                console.error("SQL Injetion detectado em cadastrar produto");
                alert("SQL Injection detectado.") 
                return;
            }

            const result = await fetch("http://localhost:3000/ferramenta", {
                method: 'post', 
                body: JSON.stringify({
                    "codigo": codigo,
                    "serie": serie,
                    "nome": nome,
                    "descricao": desc,
                    "img": img,
                    "token": localStorage.getItem("token")
                }),
                mode: 'cors',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })

            res = await result.json();

            console.log(res);

            if (result.status == 200){
                alert(res.message)
            }
    
        //DELETAR PRODUTO
        }else if(e.target == document.querySelector("#delet")){

            let codigo = document.querySelector("#codigo").value;

            if (codigo.match(sqlRegex)){
                console.error("SQL Injetion detectado em cadastrar produto");
                alert("SQL Injection detectado.") 
                return;
            }

            const result = await fetch("http://localhost:3000/ferramenta", {
                method: 'delete', 
                body: JSON.stringify({
                    "codigo": codigo,
                    "token": localStorage.getItem("token")
                }),
                mode: 'cors',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })

            res = await result.json();

            console.log(res);

            if (result.status == 200){
                alert(res.message)
            }

        //EDITAR PRODUTO
        }else if(e.target == document.querySelector("#edit")){

            let codigo = document.querySelector("#codigo").value;
            let serie = document.querySelector("#serie").value;
            let nome = document.querySelector("#nome").value;
            let desc = document.querySelector("#desc").value;
            let img = document.querySelector("#img").value;

            if (codigo.match(sqlRegex) || serie.match(sqlRegex) || nome.match(sqlRegex) || desc.match(sqlRegex) || img.match(sqlRegex) ){
                console.error("SQL Injetion detectado em cadastrar produto");
                alert("SQL Injection detectado.") 
                return;
            }

            const result = await fetch("http://localhost:3000/ferramenta", {
                method: 'put', 
                body: JSON.stringify({
                    "codigo": codigo,
                    "serie": serie,
                    "nome": nome,
                    "descricao": desc,
                    "img": img,
                    "token": localStorage.getItem("token")
                }),
                mode: 'cors',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })

            res = await result.json();

            console.log(res);

            if (result.status == 200){
                alert(res.message)
            }

        //VER PRODUTOS
        }else if(e.target == document.querySelector("#products")){

            let base = document.querySelector("#base");
            let products = document.querySelector("#Produtos");
            let view  = document.querySelector("#view-ferramentas");

            if (products.classList.contains("disable")){
                products.classList.remove("disable");
                base.classList.add("disable");
            }else{
                base.classList.remove("disable");
                products.classList.add("disable");
            }

            const result = await fetch("http://localhost:3000/ferramenta", {
                method: 'get', 
                mode: 'cors',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                })
            })

            res = await result.json();

            if (view.firstChild){
                view.innerHTML = "";
            }

            if (res){
                res.map(
                    (item) => {
                        
                        let produto = document.createElement("div");
                        console.log(item);
                        produto.innerHTML = `
                            <div class="produto">
                                <img class="img-produto" src="${item.img}" alt="#">
                                <div class="div-produto-h">
                                    <h1 class="nome-produto">${item.nome}</h1>
                                    <p class="cod-produto">${item.codigo}</p>
                                </div>
                                <div class="div-produto-b">
                                    <p class="serie-produto">N° série: ${item.serie}</p>
                                    <p class="desc-produto">${item.descricao}</p>
                                </div>
                            </div>
                        `

                        produto.className = "produto";

                        view.appendChild(produto)
                    }
                )
            }
        
        //FAZER LOGIN
        }else if(e.target == document.querySelector("#voltar")){

            let base = document.querySelector("#base");
            let products = document.querySelector("#Produtos");

            if (base.classList.contains("disable")){
                base.classList.remove("disable")
                products.classList.add("disable")
            }

        }else if(e.target == document.querySelector("#confirm-login")){

            const email = document.querySelector("#log-email").value;
            const senha = document.querySelector("#log-senha").value;

            if (email.match(sqlRegex) || senha.match(sqlRegex)){
                console.error("SQL Injetion detectado em cadastrar produto");
                alert("SQL Injection detectado.") 
                return;
            }

            if (email){
                if (senha){

                    hashsenha = await md5(senha)
                    
                    const res = await login(email,hashsenha);

                    console.log(res);

                }
            }

        //FAZER REGISTRO
        }else if(e.target == document.querySelector("#confirm-register")){

            const email = document.querySelector("#reg-email").value;
            const senha = document.querySelector("#reg-senha").value;

            if (email.match(sqlRegex) || senha.match(sqlRegex)){
                console.error("SQL Injetion detectado em cadastrar produto");
                alert("SQL Injection detectado.") 
                return;
            }

            if (email){
                if (senha){
                    
                    hashsenha = await md5(senha)
                    
                    const res = await register(email,hashsenha);

                    console.log(res);

                }
            }

        }

        // BOTÕES DE LOGIN E REGISTER
        if(e.target == document.querySelector("#login")){

            let base = document.querySelector("#base");
            let log = document.querySelector("#log");
            let reg = document.querySelector("#reg");
            let products = document.querySelector("#Produtos");

            if (log.classList.contains("disable")){
                products.classList.add("disable");
                base.classList.add("disable");
                log.classList.remove("disable");
            }else{
                log.classList.add("disable");
                base.classList.remove("disable");
            }

            if (!reg.classList.contains("disable")){
                reg.classList.add("disable")
            }

        }else if(e.target == document.querySelector("#register")){

            let base = document.querySelector("#base");
            let log = document.querySelector("#log");
            let reg = document.querySelector("#reg");
            let products = document.querySelector("#Produtos");

            if (reg.classList.contains("disable")){
                products.classList.add("disable");
                base.classList.add("disable");
                reg.classList.remove("disable");
            }else{
                reg.classList.add("disable");
                base.classList.remove("disable");
            }

            if (!log.classList.contains("disable")){
                log.classList.add("disable")
            }

        }
        
        e.preventDefault();
    }
)


/*

*/