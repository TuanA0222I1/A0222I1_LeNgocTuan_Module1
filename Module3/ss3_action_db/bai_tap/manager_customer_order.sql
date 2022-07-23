create database if not exists ss2_erd;

use ss2_erd;

create table customer(
c_id int primary key,
c_name varchar(50),
c_age int
);

create table orders(
o_id int primary key,
c_id int,
o_date datetime,
o_total_price int,
constraint fk_o_c foreign key(c_id) references customer(c_id)
);

create table produce(
p_id int primary key,
p_name varchar(50),
p_price int
);


create table orders_details(
o_id int,
p_id int,
od_qty int,
constraint fk_od_o foreign key(o_id) references orders(o_id),
constraint fk_od_p foreign key(p_id) references produce(p_id)
);

insert into customer values (1,"Minh Quan",21),(2,"Ngoc Oanh",32),(3,"Hong Ha",40);

insert into orders (o_id,c_id,o_date) values (1,1,"2006-03-21"),(2,2,"2006-03-23"),(3,1,"2006-03-16");

insert into produce values (1,"may giat",3),(2,"tu lanh",5),(3,"dieu hoa",7),(4,"quat",1),(5,"bep dien",2);

insert into orders_details values (1,1,3),(1,3,7),(1,4,2),(2,1,1),(3,1,8),(2,5,4),(2,3,3);

-- 1 --
SELECT 
    *
FROM
    orders;

-- 2 --
SELECT 
    c_name, p_name
FROM
    customer
        INNER JOIN
    orders ON orders.c_id = customer.c_id
        INNER JOIN
    orders_details ON orders_details.o_id = orders.o_id
        INNER JOIN
    produce ON produce.p_id = orders_details.p_id;

-- 3 -- 
SELECT 
    *
FROM
    customer
WHERE
    c_id NOT IN (SELECT 
            c_id
        FROM
            orders);

-- 4 -- 
SELECT 
    orders.o_id, o_date, (od_qty * p_price) o_total_price
FROM
    orders
inner join orders_details on orders_details.o_id = orders.o_id
inner join produce on orders_details.p_id = produce.p_id;