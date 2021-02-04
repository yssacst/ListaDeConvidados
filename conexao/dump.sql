create database if not exists festa;
use festa;

create table if not exists convidados(
id int primary key not null auto_increment,
nome varchar(100),
whatsapp varchar(100),
convite boolean,
presenca boolean
);

insert into convidados (nome, whatsapp, convite, presenca) values ('Rayssa','2132322121',true,true);
select * from convidados;

