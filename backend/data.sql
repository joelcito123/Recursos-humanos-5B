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

INSERT INTO aspirantes
    (dni,nombre,apellido,email,telefono,linkedinUrl,fechaNac,sexo, imagen,profesionId)
VALUES
    (1,'Gloria','Medina','gm@gmail.com','12345','/dh/in/gloria-medina', "1999-2-12",1,'1.jpg',2),
    (2,'Daniel','Fuentes','df@gmail.com','12345','/dh/in/daniel-fuentes', "1998-1-12",2,'2.jpg',7),
    (3,'Tim','Tim','tt@gmail.com','12345','/dh/in/tim-tim', "1997-8-15",3,'3.jpg',9),
    (4,'Rocio','Carle','rc@gmail.com','12345','/dh/in/rocio-carle', "1995-11-25",1,'4.jpg',8),
    (5,'Victor','Fuentes','vf@gmail.com','12345','/dh/in/victor-fuentes', "1996-7-3",2,'5.jpg',5),
    (6,'Luis','Fuentes','lf@gmail.com','12345','/dh/in/luis-fuentes', "1995-8-9",3,'6.jpg',6);
