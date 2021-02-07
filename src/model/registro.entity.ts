import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, TableForeignKey, ManyToOne, OneToMany} from 'typeorm';
import { Seccion } from './seccion.entity';
import { Persona } from './persona.entity';

@Entity()
export class Registro {

  public constructor(registro : any){
    this.registro_id = registro.seccion_id;
    this.status = registro.status;
    this.created_date = registro.created_date;
    this.deleted_date = registro.deleted_date;
    this.tipo = registro.type;
  }
  @PrimaryGeneratedColumn()
  registro_id: number;

  @Column()
  status: string;

  @Column()
  created_date: Date;

  @Column()
  deleted_date: Date;

  @Column()
  tipo: string;

  @ManyToOne(type => Seccion, seccion => seccion.registros)
  seccion: Seccion;

  @ManyToOne(type => Persona, persona => persona.registros)
  persona: Persona;

}