import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { Escuela } from './escuela.entity';

@Entity()
export class Facultad {

  public constructor(facultad : any){
    this.facultad_id = facultad.seccion_id;
    this.nombre = facultad.nombre;
    this.description = facultad.description;
    this.status = facultad.status;
    this.created_date = facultad.created_date;
    this.deleted_date = facultad.deleted_date;
  }
  @PrimaryGeneratedColumn()
  facultad_id: number;

  @Column()
  nombre: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column()
  created_date: Date;

  @Column()
  deleted_date: Date;

  @OneToMany(type => Escuela, escuela => escuela.facultad)
  escuelas: Escuela[];

}