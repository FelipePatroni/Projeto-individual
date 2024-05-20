Create database Projeto_volei;
use projeto_volei;

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

Create table selecao (
idSelecao int primary key auto_increment,
Nome varchar(80),
qtdSeguidor varchar(100),
Pais varchar(80)
);

Create table seguidor (
idSeguidor int primary key auto_increment,
FkTime INT,
fkUsuario INT,
constraint fktimeseguidor foreign key (fkTime) references selecao(idSelecao),
constraint fkusuarioseguidor foreign key (fkUsuario) references usuario(idusuario)
);

select * from usuario;