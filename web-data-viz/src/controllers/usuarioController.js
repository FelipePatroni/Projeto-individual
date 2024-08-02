var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        if (resultadoAutenticar.length > 0) {
                            res.json({
                                id: resultadoAutenticar[0].idUsuario,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                senha: resultadoAutenticar[0].senha
                            });
                        } else {
                            res.status(204).json({
                                aquarios: []
                            });
                        }

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var cep = req.body.cepServer;
    var sexo = req.body.sexoServer;
    var telefone = req.body.telefoneServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!")
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!")
    } else if (sexo == undefined) {
        res.status(400).send("Seu sexo está undefined!")
    } else if (telefone == undefined) {
        res.status(400).send("Sua telefone está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, cep, cpf, sexo, telefone, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function registrarQuiz(req, res) {

    var PontoCerto = req.body.PontoCertoServer;
    var PontoErrado = req.body.PontoErradoServer;
    var idUsuario = req.body.idUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.registrarQuiz(PontoCerto, PontoErrado, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a pontuação! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer

    usuarioModel.buscarQuiz(idUsuario)
        .then(
            function (resultado_Quiz) {

                res.json({
                    resultado_Quiz
                });
            }
        )
}

function buscarInformacao(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.buscarInformacao(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(204).send("Nenhum resultado encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a Informação.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarComentario(req, res) {
    var descricao = req.body.descricaoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (descricao == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu comentario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.buscarComentario(descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o comentario! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function aparecerComentario(req, res) {
        usuarioModel.aparecerComentario()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nErro ao achar os comentarios! Erro:",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }



function aparecerRanking(req, res) {
    usuarioModel.aparecerRanking()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nErro ao achar as pontuações! Erro:",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
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
}