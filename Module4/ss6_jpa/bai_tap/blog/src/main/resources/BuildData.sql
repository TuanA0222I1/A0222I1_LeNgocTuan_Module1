create database ss7_blog;
use ss7_blog;

create table category(
id int auto_increment primary key,
`name` varchar(50)
);

INSERT INTO  category (`name`) VALUES ('review'),('reaction'),('tutorial');

create table blog(
id int auto_increment primary key,
`name` varchar(50),
content varchar(50),
title varchar(50),
category_id int,
foreign key (category_id) references category(id)
);