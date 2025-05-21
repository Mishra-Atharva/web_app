SET datestyle = ISO, MDY;

create table USERS (
	user_id SERIAL PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	date_of_birth DATE NULL,
	phone VARCHAR(50) NOT NULL,
	user_type VARCHAR(10) CHECK (user_type IN ('Client', 'Freelancer', 'Admin'))NOT NULL
);


insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Anton', 'Bakhrushin', 'abakhrushin0@godaddy.com', '$2a$04$IVRm6zIw02nVYeV7E1cbZuFoVn2QhMgV0cX8Bfn.7JBU4.6nkJcL2', '7/22/2024', '727-961-2707', 'Freelancer');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Candra', 'Mongain', 'cmongain1@t.co', '$2a$04$opaypHamkuT05fEkNLqUteGcztu71GzunPCOdNBXgP7GScD/bP54W', '2/3/2025', '506-857-4611', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Georgetta', 'Salvatore', 'gsalvatore2@mit.edu', '$2a$04$Qt0xastgpwPd8U2W6JaYEuOOPBqQHxHtHaygV6hYm9gmKJ.rHXjHa', '4/6/2025', '641-983-0177', 'Admin');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Gregorio', 'Parlatt', 'gparlatt3@google.co.jp', '$2a$04$dAMPdd2rRTmEegP5x8im8Ok57Oy2wUgFb6kKQrSDzpW8CUKDo8hCu', '5/23/2024', '227-217-2306', 'Admin');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Izzy', 'De Cristofalo', 'idecristofalo4@linkedin.com', '$2a$04$s0KzUSPmVpznfIIXjTXn8O7EkKaCxnC2fg.77Z3vpEiyl8m7x4zvm', '10/17/2024', '341-504-7988', 'Admin');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Von', 'Makiver', 'vmakiver5@java.com', '$2a$04$.pkqdE43O0os82/nzQlmJuXJ5NnKurdM4bnYT6t06kZXaa7metA4a', '6/19/2024', '374-974-1777', 'Admin');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Jeth', 'Bucham', 'jbucham6@smugmug.com', '$2a$04$0vS/zWv5o.DkipN1BXbzI.T/yOKYZOWiiSWtT/nMXMf61wbceqpYW', '12/3/2024', '226-300-7835', 'Freelancer');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Danette', 'Pluck', 'dpluck7@dyndns.org', '$2a$04$wGtY5N34Q7YeeouW.dtRCeTaFipQSTLZESOuagWQaPtEw/nsi.6Mm', '3/10/2025', '425-980-5062', 'Admin');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Ulrikaumeko', 'Stouther', 'ustouther8@va.gov', '$2a$04$OPEyYvQJSg1Z6IsQJfwxeuujpcbrGb5.ZsXaBWJl/RgBfF0q3dggG', '5/20/2024', '313-568-3432', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Baryram', 'Tomasello', 'btomasello9@qq.com', '$2a$04$Lpknd8.G5rzxWpyKLQRwTunTLkqshJphz5WYEhtXAK0CXQkKGHWqi', '9/5/2024', '786-468-4664', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Esther', 'Howling', 'ehowlinga@answers.com', '$2a$04$OdrNK2tFiMDmT978M8GSn.7vEACzKqr6lG7AloYeLA0x5yS16xID2', '12/22/2024', '980-236-0373', 'Freelancer');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Fernanda', 'Peak', 'fpeakb@patch.com', '$2a$04$k7X0muw7k9AdF7bRicQGV./eaHf721hdhqjooANEoeoT66.5WYTOC', '8/10/2024', '198-703-1694', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Leelah', 'Thornbarrow', 'lthornbarrowc@123-reg.co.uk', '$2a$04$uc/iMTRE5Fog2k0INQ7E1uHBj0bVYpZuGZcuHbCJg.qR/JGIxAANu', '8/21/2024', '714-706-5318', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Karly', 'Solley', 'ksolleyd@etsy.com', '$2a$04$gF6U1i4brsK2C5JmPv6RrebAm9H038xs2m3IH7xITIdvDKnacUMYi', '8/28/2024', '397-805-2761', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Isador', 'Parsons', 'iparsonse@bloglines.com', '$2a$04$7FzdcPDlTuSqLf/uXrx3teKj9Sml4UNSH56IklgGvPYv1e.ShCL0y', '7/4/2024', '394-579-3769', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Alejandra', 'Janusik', 'ajanusikf@themeforest.net', '$2a$04$pBfULGje5u9LY4GxkvHN9.moXlD4UMpR5bu1f131R44UqXvyM2AS6', '11/29/2024', '937-666-8519', 'Freelancer');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Sallyann', 'Churly', 'schurlyg@tinypic.com', '$2a$04$phaK0HD9t7gjr/GvL8nNCu0P.4KG0HsSAz0/q9UmlEY7m4UYL0BPG', '12/19/2024', '236-761-0142', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Claire', 'Bracco', 'cbraccoh@bluehost.com', '$2a$04$8ueq0TFBepcI0HtFl2b1f.PWFjO5IuOxjYN3QMsHsrnd2UCIYXF3y', '12/31/2024', '587-806-2897', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Jori', 'Riddock', 'jriddocki@npr.org', '$2a$04$nhNBwPScqtW/kT5c37HCAuFRbDPkGIcgvjOqPZfuiTJNNkCaV3.Py', '8/13/2024', '142-738-6190', 'Admin');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Estell', 'Fairnie', 'efairniej@chicagotribune.com', '$2a$04$EJJH3tpTxIMvv2nMKIp.3uWgcUvdzUaAaIcsjoa3nYDZ3WXG.h3iO', '2/25/2025', '690-891-7100', 'Freelancer');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Ad', 'Hurdle', 'ahurdlek@timesonline.co.uk', '$2a$04$BOL8k6eU.LSCWxx8bEG2V.CYREKY7rmb3Rqr/7HEsScl.BvbuCwkO', '1/3/2025', '225-403-8620', 'Admin');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Maurice', 'Soars', 'msoarsl@si.edu', '$2a$04$W23cvRaSOTqp/Kgxr2lCz.DsBScBY38Ec8IMe3B7Dhcjr0zs/8DHe', '8/20/2024', '675-887-1483', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Aldo', 'Haskett', 'ahaskettm@apple.com', '$2a$04$aUU4FmrFvqiMy8WA4GTaf.1onH7NS5xwPl3Z6u1HJZAvnFFsH.Hbm', '12/1/2024', '701-816-6660', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Goldi', 'Haylands', 'ghaylandsn@reddit.com', '$2a$04$XCPRwTyGaq1iu7.X2pBFcusD9KvKPezBCcavrrqFgoD9y2tBLzskC', '6/6/2024', '907-177-2097', 'Freelancer');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Gwendolen', 'McKane', 'gmckaneo@noaa.gov', '$2a$04$FRXAzIkQ03YaDHJd7nfgCu2O9SVeJtZ7jC7tNOEiVSZrWlEXy/MtS', '12/3/2024', '502-995-9509', 'Freelancer');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Gaspar', 'Grushin', 'ggrushinp@hibu.com', '$2a$04$ak2E/7UEcDaJQQZgddVMd.RRbxQPe.58ehdZcFLkpBJo.LuKh43MW', '6/7/2024', '464-506-9687', 'Admin');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Emanuele', 'Cockhill', 'ecockhillq@gnu.org', '$2a$04$O/BAY8Ox.zzR8CuK/g.Dm.qYoXXms/fXq..Qk9425KYOibbrV.7.y', '3/1/2025', '656-860-7685', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Jeana', 'Bissill', 'jbissillr@jiathis.com', '$2a$04$k7rbovNGt41OKg/vcsXyz.eiPf1Eg8rincgP0errfB/KBV6E0OUbK', '8/17/2024', '589-803-0889', 'Client');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Danna', 'Pesterfield', 'dpesterfields@php.net', '$2a$04$N7zbZwrG7pctM9ulw4WA6OzR3iJLwSf6DA0RrqyTv.Vwo/omM80eO', '1/14/2025', '932-183-5337', 'Freelancer');
insert into USERS (first_name, last_name, email, password, date_of_birth, phone, user_type) values ('Pauletta', 'Minshall', 'pminshallt@elpais.com', '$2a$04$8sSF0DzKQxgdrvFGx7I1Quf.twFQ.47HVN6FGr5bFayAUJWE/s2fC', '10/7/2024', '307-693-5048', 'Freelancer');