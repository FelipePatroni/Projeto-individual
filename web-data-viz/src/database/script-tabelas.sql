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

Create table Paises (
idPais int primary key auto_increment,
nome varchar(60),
FkPais int,
constraint FkPais foreign key (FkPais) references usuario(IdUsuario)
);

select * from usuario;