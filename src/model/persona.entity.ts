import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, TableForeignKey, ManyToOne, OneToMany} from 'typeorm';
import { Registro } from './registro.entity';

@Entity()
export class Persona{

  public constructor(persona : any){
    this.persona_id = persona.seccion_id;
    this.status = persona.status;
    this.created_date = persona.created_date;
    this.deleted_date = persona.deleted_date;
    this.dni = persona.dni;
    this.primer_nombre = persona.primer_nombre;
    this.segundo_nombre = persona.segundo_nombre
  }
  @PrimaryGeneratedColumn()
  persona_id: number;

  @Column()
  status: string;

  @Column()
  created_date: Date;

  @Column()
  deleted_date: Date;

  @Column()
  dni: string;

  @Column()
  primer_nombre: string;

  @Column()
  segundo_nombre: string;

  @OneToMany(type => Registro, registro => registro.persona)
  registros: Registro[];
}