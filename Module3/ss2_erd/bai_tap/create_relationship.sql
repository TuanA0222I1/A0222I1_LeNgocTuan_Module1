create database if not exists relationship;

use relationship;

create table nha_cc(
ma_ncc varchar(10),
ten_cc varchar(50),
dia_chi varchar(50),
sdt varchar(10),
primary key(ma_ncc,sdt)
);

create table nha_lien_he(
sdt varchar(10) primary key,
ten_nguoi_lien_he varchar(10),
address varchar(50),
constraint fk_nha_lh_nha_cc foreign key (sdt) references nha_cc(sdt)
);

create table don_vi_dh(
so_dh varchar(10) primary key,
ngaydh datetime,
ma_ncc varchar(10),
constraint fk_cc_dh foreign key (ma_ncc) references nha_cc(ma_ncc)
);

create table phieu_xuat(
so_px varchar(10) primary key,
ngay_xuat datetime
);

create table phieu_nhap(
so_pn varchar(10) primary key,
ngay_nhap datetime
);

create table vat_tu(
ma_vtu varchar(10) primary key,
ten_vtu varchar(50)
);

create table cu_the_xuat_vat_tu(
so_px varchar(10),
ma_vtu varchar(10), 
dg_xuat varchar(10),
sl_xuat int,
constraint fk_xuat_vt foreign key (so_px) references phieu_xuat(so_px),
constraint fk_vt_xuat foreign key (ma_vtu) references vat_tu(ma_vtu)
);

create table cu_the_nhap_vat_tu(
so_pn varchar(50),
ma_vtu varchar(10),
dg_nhap varchar(10),
sl_nhap int,
constraint fk_nhap_vt foreign key (so_pn) references phieu_nhap(so_pn),
constraint fk_vt_nhap foreign key (ma_vtu) references vat_tu(ma_vtu)
);

create table cu_the_dieu_hanh_vat_tu(
so_dh varchar(10),
ma_vtu varchar(10),
ngay_dh date,
so_luong int,
constraint fk_dh_vt foreign key (so_dh) references don_vi_dh(so_dh),
constraint fk_vt_dh foreign key (ma_vtu) references vat_tu(ma_vtu)
);
