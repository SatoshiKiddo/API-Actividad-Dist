import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { Escuela } from './escuela.entity';

@Entity()
export class Facultad {

  public constructor(facultad : any){
    if (facultad){
    this.facultad_id = facultad.facultad_id;
    this.nombre = facultad.nombre;
    this.description = facultad.description;
    this.status = facultad.status;
    this.created_date = facultad.created_date;
    this.deleted_date = facultad.deleted_date;
    }
  }
  @PrimaryGeneratedColumn()
  facultad_id: number;

  @Column({
    nullable: false,
})
  nombre: string;

  @Column({
    nullable: false,
})
  description: string;

  @Column({
    nullable: false,
})
  status: string;

  @Column({
    nullable: false,
})
  created_date: Date;

  @Column({
    nullable: true,
})
  deleted_date: Date;

  @OneToMany(type => Escuela, escuela => escuela.facultad)
  escuelas: Escuela[];

}