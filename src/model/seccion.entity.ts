import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, TableForeignKey, ManyToOne, OneToMany} from 'typeorm';
import { Escuela } from './escuela.entity';
import { Registro} from './registro.entity';

@Entity()
export class Seccion {

  public constructor(seccion : any){
    this.seccion_id = seccion.seccion_id;
    this.nombre = seccion.nombre;
    this.description = seccion.description;
    this.status = seccion.status;
    this.created_date = seccion.created_date;
    this.deleted_date = seccion.deleted_date;
    this.uc = seccion.uc;
    this.ht = seccion.ht;
    this.hl = seccion.hl;
    this.hp = seccion.hp;
    this.tipo = seccion.type;
    this.semestre = seccion.semestre;
  }

  @PrimaryGeneratedColumn()
  seccion_id: number;

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

  @Column()
  uc: number;

  @Column()
  ht: number;

  @Column()
  hp: number;

  @Column()
  hl: number;

  @Column()
  tipo: string;

  @Column()
  semestre: number;

  @ManyToOne(type => Escuela, escuela => escuela.secciones)
  escuela: Escuela;

  @OneToMany(type => Registro, registro => registro.seccion)
  registros: Registro[];

}