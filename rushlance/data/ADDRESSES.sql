create table ADDRESSES (
	address_id SERIAL PRIMARY KEY,
	user_id INT REFERENCES USERS(user_id),
	street_address VARCHAR(255) NOT NULL,
	city VARCHAR(100) NOT NULL,
	state VARCHAR(100) NULL,
	postal_code VARCHAR(20),
	country VARCHAR(100) NOT NULL
);

insert into ADDRESSES (street_address, city, state, postal_code, country) values ('795 East Avenue', 'La Unión', null, null, 'Chile');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('95 Loftsgordon Park', 'Khakhea', null, null, 'Botswana');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('26184 Basil Avenue', 'Batawa', null, null, 'Indonesia');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('1 Calypso Pass', 'Beishan', null, null, 'China');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('48682 Loeprich Parkway', 'Yasynuvata', null, null, 'Ukraine');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('1 Nancy Plaza', 'Nahrīn', null, null, 'Afghanistan');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('4 Colorado Park', 'Dārayyā', null, null, 'Syria');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('11 8th Court', 'Cruz', 'Braga', '4775-114', 'Portugal');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('69 Rusk Place', 'Duancun', null, null, 'China');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('91 Lien Lane', 'Gubin', null, '66-635', 'Poland');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('4 Gale Junction', 'Muricay', null, '1103', 'Philippines');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('65816 Vidon Road', 'Insua', 'Viana do Castelo', '4930-250', 'Portugal');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('3047 Vermont Way', 'La Esperanza', 'Guanajuato', '37900', 'Mexico');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('72 Delladonna Parkway', 'Jian’ou', null, null, 'China');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('209 Barnett Lane', 'Malá Strana', null, '375 01', 'Czech Republic');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('07063 Gina Parkway', 'Moville', null, 'F26', 'Ireland');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('9076 Karstens Drive', 'Beopwon', null, null, 'South Korea');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('58 Jay Crossing', 'Quba', null, null, 'Azerbaijan');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('10872 Iowa Pass', 'Kaduseeng', null, null, 'Indonesia');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('8 Shasta Court', 'Wushi', null, null, 'China');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('198 Crowley Crossing', 'Itajuípe', null, '45630-000', 'Brazil');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('902 Ramsey Park', 'Enrekang', null, null, 'Indonesia');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('5 Reinke Hill', 'Longtang', null, null, 'China');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('42 Hintze Park', 'Wailebe', null, null, 'Indonesia');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('8619 Leroy Plaza', 'Bendosari', null, null, 'Indonesia');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('9 New Castle Court', 'Düsseldorf', 'Nordrhein-Westfalen', '40591', 'Germany');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('1 Monument Hill', 'El Copey', null, '201018', 'Colombia');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('945 Jenna Junction', 'Buta Ranquil', null, '8353', 'Argentina');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('910 Evergreen Pass', 'Svobody', null, '357560', 'Russia');
insert into ADDRESSES (street_address, city, state, postal_code, country) values ('81038 Thierer Court', 'El Peñón', null, '11510', 'Dominican Republic');