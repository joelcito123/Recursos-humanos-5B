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

