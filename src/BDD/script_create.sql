DROP TABLE IF EXISTS public.Facultad CASCADE;

CREATE TABLE Facultad (
	facultad_id SERIAL,
	nombre VARCHAR(50) NOT NULL,
	description varchar(500) NOT NULL,
	status VARCHAR(50) NOT NULL,
	created_date DATE NOT NULL,
	deleted_date DATE NULL,
	PRIMARY KEY(facultad_id)
);

DROP TABLE IF EXISTS public.Escuela CASCADE;

CREATE TABLE Escuela(
	escuela_id SERIAL,
	nombre VARCHAR(50) NOT NULL,
	description varchar(500) NOT NULL,
	facultad_id_fk INT NOT NULL,
	status VARCHAR(50) NOT NULL,
	created_date DATE NOT NULL,
	deleted_date DATE NULL,
	CONSTRAINT "FK_Escuela_Facultad" FOREIGN KEY (facultad_id_fk)
		REFERENCES public.Facultad (facultad_id) MATCH SIMPLE
		ON UPDATE NO ACTION
		ON DELETE CASCADE,
	PRIMARY KEY(escuela_id)
);

DROP TABLE IF EXISTS public.Seccion CASCADE;

CREATE TABLE Seccion(
	seccion_id SERIAL,
	uc INT,
	semestre INT NOT NULL,
	tipo VARCHAR(50) NOT NULL,
	ht DECIMAL,
	hp DECIMAL,
	hl DECIMAL,
	status VARCHAR(50) NOT NULL,
	created_date DATE NOT NULL,
	deleted_date DATE NULL,
	escuela_id_fk INT NULL,
	CONSTRAINT "FK_Seccion_Escuela" FOREIGN KEY (escuela_id_fk)
		REFERENCES public.Escuela (escuela_id) MATCH SIMPLE
		ON UPDATE NO ACTION
		ON DELETE CASCADE,
	PRIMARY KEY (seccion_id)
);

DROP TABLE IF EXISTS public.Persona CASCADE;

CREATE TABLE Persona(
	persona_id SERIAL,
	status VARCHAR(50) NOT NULL,
	created_date DATE NOT NULL,
	deleted_date DATE NULL,
	dni VARCHAR(10) NOT NULL,
	primer_nombre VARCHAR(50) NOT NULL,
	segundo_nombre VARCHAR(50) NOT NULL,
	PRIMARY KEY (persona_id)
);

DROP TABLE IF EXISTS public.Registro CASCADE;

CREATE TABLE Registro(
	registro_id SERIAL,
	status VARCHAR(50) NOT NULL,
	created_date DATE NOT NULL,
	deleted_date DATE NOT NULL,
	type VARCHAR(50) NOT NULL,
	seccion_id_fk int NOT NULL,
	persona_id_fk int NOT NULL,
	CONSTRAINT "FK_Registro_Persona" FOREIGN KEY (persona_id_fk)
		REFERENCES public.Persona (persona_id) MATCH SIMPLE
		ON UPDATE NO ACTION
		ON DELETE CASCADE,
	CONSTRAINT "FK_Registro_Seccion" FOREIGN KEY (seccion_id_fk)
		REFERENCES public.Seccion (seccion_id) MATCH SIMPLE
		ON UPDATE NO ACTION
		ON DELETE CASCADE,
	PRIMARY KEY (registro_id)
);