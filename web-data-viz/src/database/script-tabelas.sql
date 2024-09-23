Create database Projeto_volei;
use Projeto_volei;
Create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(70),
cep char(8),
cpf char(14),
sexo varchar(45),
telefone char(13),
senha varchar(70)
);

Create table Pontuacao (
idPontuacao int primary key auto_increment,
PontoCerto int,
PontoErrado int, 
FkUsuario int,
constraint FkpontuacaoUsuario foreign key (FkUsuario) references usuario(idUsuario)
);

SELECT usuario.nome, MAX(Pontuacao.PontoCerto) AS 'Pontuação'FROM Pontuacao JOIN usuario ON Pontuacao.fkUsuario = usuario.idUsuario GROUP BY  usuario.nome ORDER BY Pontuação ASC;

select * from pontuacao;

Create table Post (
idPost int primary key auto_increment,
descricao varchar(250),
FkUsuario int,
constraint FkPostUsuario foreign key (FkUsuario) references usuario(IdUsuario)
);

select * from usuario;

select usuario.nome, post.descricao from post join usuario on fkusuario = idusuario;

truncate post	;

select * from usuario;

select * from post join usuario on fkusuario=idusuario;
