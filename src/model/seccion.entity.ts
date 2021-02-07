import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, TableForeignKey, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { Escuela } from './escuela.entity';
import { Registro} from './registro.entity';

@Entity()
export class Seccion {

  public constructor(seccion : any){
    if(seccion){
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
  }

  @PrimaryGeneratedColumn()
  seccion_id: number;

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

  @Column({
    nullable: false,
})
  uc: number;

  @Column({
    nullable: false,
})
  ht: number;

  @Column({
    nullable: false,
})
  hp: number;

  @Column({
    nullable: false,
})
  hl: number;

  @Column({
    nullable: false,
})
  tipo: string;

  @Column({
    nullable: true,
})
  semestre: number;

  @ManyToOne(type => Escuela, escuela => escuela.secciones)
  @JoinColumn({ name: "escuela_id_fk" })
  escuela: Escuela;

  @OneToMany(type => Registro, registro => registro.seccion)
  registros: Registro[];

}