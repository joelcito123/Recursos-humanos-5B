CREATE DATABASE recruitingRH;

USE recruitingRH;

CREATE TABLE profesiones(
	Id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(20) NOT NULL,
    PRIMARY KEY(Id)
);

INSERT INTO profesiones
	(nombre) 
VALUES
	('Abogado'),
    ('Administrador'),
	('Arquitecto'),
	('Botánico'),
	('Computista'),
	('Economista'),
	('Técnico de sonido'),
	('Profesor'),
	('Linguista')
;

CREATE TABLE aspirantes(
	Id INT NOT NULL AUTO_INCREMENT,
	dni INT UNIQUE NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL,
	email VARCHAR(30) NOT NULL,
	telefono INT,
	linkedin_url VARCHAR(255),
	fec_nac DATE,
	sexo VARCHAR(20),
	imagen VARCHAR(20),
	id_profesion INT, 
    PRIMARY KEY(Id),
	FOREIGN KEY (id_profesion) REFERENCES profesiones(Id)
);

INSERT INTO aspirantes
	(dni,nombre,apellido,email,telefono,linkedin_url,fec_nac,sexo, imagen,id_profesion)
VALUES
(11111,'Gloria','Medina','gm@gmail.com',12345,'url',12/03/1999,'fem','url',2)