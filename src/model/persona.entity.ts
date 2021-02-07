import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, TableForeignKey, ManyToOne, OneToMany} from 'typeorm';
import { Registro } from './registro.entity';

@Entity()
export class Persona{

  public constructor(persona : any){
    if (persona){
    this.persona_id = persona.persona_id;
    this.status = persona.status;
    this.created_date = persona.created_date;
    this.deleted_date = persona.deleted_date;
    this.dni = persona.dni;
    this.primer_nombre = persona.primer_nombre;
    this.segundo_nombre = persona.segundo_nombre
    }
  }

  @PrimaryGeneratedColumn()
  persona_id: number;

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

  @Column({
    nullable: false,
})
  dni: string;

  @Column({
    nullable: false,
})
  primer_nombre: string;

  @Column({
    nullable: false,
})
  segundo_nombre: string;

  @OneToMany(type => Registro, registro => registro.persona)
  registros: Registro[];
}