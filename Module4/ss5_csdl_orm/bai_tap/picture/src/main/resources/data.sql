create database pictures_in_day;

use pictures_in_day;

create table picture(
id int auto_increment primary key,
day_in datetime default now()
);

create table comments(
id int auto_increment primary key,
id_picture int,
star int,
author varchar(50),
feedback varchar(50),
foreign key (id_picture) references picture(id)
);