create database ss12_jdbc_crud;
use ss12_jdbc_crud;
create table user_ss12(
id int auto_increment primary key,
`name` varchar(50),
email varchar(50),
country varchar(50)
);