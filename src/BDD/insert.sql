insert into Persona (status, created_date, deleted_date, dni , primer_nombre, segundo_nombre)
values ('enabled', current_date, NULL, '26466404', 'pedro', 'jose');
insert into Facultad(status, created_date, deleted_date, nombre, description)
values ('enabled', current_date, NULL, 'ingenieria', 'blablabla');
insert into Escuela(status, created_date, deleted_date, nombre, description, facultad_id_fk)
values ('enabled', current_date, NULL, 'ingenieria informatica', 'blablabla', 1);
insert into Seccion(status, created_date, deleted_date, nombre, description, uc, semestre, tipo, hl, ht, hp, escuela_id_fk)
values ('enabled', current_date, NULL, 'ingenieria informatica', 'blablabla', 5, 7, 'epale', 5, 5, 5, 1);
insert into Registro(status, created_date, deleted_date, tipo, persona_id_fk, seccion_id_fk)
values ('enabled', current_date, NULL, 'student', 1, 1);
insert into Registro(status, created_date, deleted_date, tipo, persona_id_fk, seccion_id_fk)
values ('enabled', current_date, NULL, 'teacher', 1, 1);

select * from registro