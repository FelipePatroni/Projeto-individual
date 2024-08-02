var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, cep, cpf, sexo, telefone, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, cep, cpf, sexo, telefone, senha) VALUES ('${nome}', '${email}', '${cep}', '${cpf}', '${sexo}', '${telefone}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarQuiz(PontoCerto, PontoErrado, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarQuiz():", PontoCerto, PontoErrado, idUsuario);

    var instrucaoSql =
        `INSERT INTO Pontuacao (PontoCerto, PontoErrado, FkUsuario) VALUES (${PontoCerto}, ${PontoErrado}, ${idUsuario});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizSelect():", idUsuario);

    var instrucaoSql =
        `SELECT usuario.nome, Pontuacao.PontoCerto, Pontuacao.PontoErrado FROM usuario JOIN Pontuacao ON FkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarInformacao(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu bd está RODANDO CORRETAMENTE \n\n funcion buscarInformacao():", idUsuario)

    var instrucaoSql = `
    SELECT usuario.nome, Pontuacao.PontoCerto, Pontuacao.PontoErrado from usuario join Pontuacao on FkUsuario = ${idUsuario} ORDER BY idPontuacao desc limit 1
    `;
    return database.executar(instrucaoSql)
}


function buscarComentario(descricao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu bd está RODANDO CORRETAMENTE \n\n funcion buscarComentario():", descricao, idUsuario)

    var instrucaoSql = `
    INSERT INTO Post(descricao, FkUsuario) VALUES ('${descricao}', ${idUsuario});
    `;
    return database.executar(instrucaoSql)
}

function aparecerComentario(descricao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu bd está RODANDO CORRETAMENTE \n\n funcion buscarComentario():", descricao, idUsuario)

    var instrucaoSql = `
    SELECT usuario.nome, post.descricao from post join usuario on fkusuario = ${idusuario};
    `;
    return database.executar(instrucaoSql)
}


function aparecerRanking() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function aparecerRanking(): ");

    var instrucaoSql =
        ` SELECT usuario.nome, MAX(Pontuacao.PontoCerto) AS 'Pontuação'FROM Pontuacao JOIN usuario ON Pontuacao.fkUsuario = usuario.idUsuario GROUP BY  usuario.nome ORDER BY Pontuação ASC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    // Executa a instrução SQL no banco de dados e retorna o resultado
    return database.executar(instrucaoSql);
}


    module.exports = {
        autenticar,
        cadastrar,
        registrarQuiz,
        buscarQuiz,
        buscarInformacao,
        buscarComentario,
        aparecerComentario,
        aparecerRanking
    };