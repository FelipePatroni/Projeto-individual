Create database Projeto;
use projeto;

Create table usuario (
idUsuario int primary key auto_increment,
Nome varchar(45),
Email varchar(70),
CEP char(9),
CPF char(11),
Sexo varchar(45),
telefone char(12),
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