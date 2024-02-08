CREATE DATABASE recruitingRH;

USE recruitingRH;

CREATE TABLE profesiones(
	Id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(20) NOT NULL,
	createdAt DATE,
    updatedAt DATE,
    deletedAt DATE,
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
	email VARCHAR(100) NOT NULL,
	telefono VARCHAR(20),
	linkedinUrl VARCHAR(255),
	fechaNac DATE,
	sexo ENUM('Femenino','Masculino','Otro') NOT NULL,
	imagen VARCHAR(255),
	profesionId INT NOT NULL, 
	createdAt DATE,
    updatedAt DATE,
    deletedAt DATE,
    PRIMARY KEY(Id),
	FOREIGN KEY (profesionId) REFERENCES profesiones(Id)
);

INSERT INTO aspirantes
	(dni,nombre,apellido,email,telefono,linkedinUrl,fechaNac,sexo, imagen,profesionId)
VALUES
(1,'Gloria','Medina','gm@gmail.com','12345','url',"1999-2-12",1,'url',2),
(2,'Daniel','Fuentes','df@gmail.com','12345','url',"1998-1-12",2,'url',7),
(3,'Tim','Tim','tt@gmail.com','12345','url',"1997-8-15",3,'url',9),
(4,'Rocio','Carle','rc@gmail.com','12345','url',"1995-11-25",1,'url',8),
(5,'Victor','Fuentes','vf@gmail.com','12345','url',"1996-7-3",2,'url',5),
(6,'Luis','Fuentes','lf@gmail.com','12345','url',"1995-8-9",3,'url',6)