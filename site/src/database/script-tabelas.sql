create database rapforte;
use rapforte;

create table usuario (
  idUsuario int primary key auto_increment,
  nome varchar(45),
  email varchar(45),
  senha varchar(45),
  regiao varchar (6)
);

create table quiz (
  fkUsuario int primary key,
  foreign key (fkUsuario) references usuario (idUsuario),
  nomeUsuario varchar (45),
  qtdAcertos int);