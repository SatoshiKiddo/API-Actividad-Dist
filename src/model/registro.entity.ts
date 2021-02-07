import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, TableForeignKey, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { Seccion } from './seccion.entity';
import { Persona } from './persona.entity';

@Entity()
export class Registro {

  public constructor(registro : any){
    if(registro){
    this.registro_id = registro.registro_id;
    this.status = registro.status;
    this.created_date = registro.created_date;
    this.deleted_date = registro.deleted_date;
    this.tipo = registro.type;
    }
  }
  @PrimaryGeneratedColumn()
  registro_id: number;

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
  tipo: string;

  @ManyToOne(type => Seccion, seccion => seccion.registros)
  @JoinColumn({ name: "seccion_id_fk" })
  seccion: Seccion;

  @ManyToOne(type => Persona, persona => persona.registros)
  @JoinColumn({ name: "persona_id_fk" })
  persona: Persona;

}