create database if not exists ss5_list_music;
use ss5_list_music;
create table type_music(
id int auto_increment primary key,
`name` varchar(50)
);

create table music(
id int auto_increment primary key,
`name` varchar(50),
singer varchar(50),
typeMusicId int,
linkMusic varchar(50),
foreign key (typeMusicId) references type_music(id)
);


insert into type_music (`name`) values("Pop"),("Rap"),("Rock"),("R&B"),("Country");
INSERT INTO `ss5_list_music`.`music` (`name`, singer,`typeMusicId`, `linkMusic`) VALUES ('Milk Song','Haku' ,'3', 'MilkSong.mp3');
INSERT INTO `ss5_list_music`.`music` (`name`, singer,`typeMusicId`, `linkMusic`) VALUES ('Chan da cham dat chua','ICD' ,'2', 'ICD_chanchamdatchua.mp3');
