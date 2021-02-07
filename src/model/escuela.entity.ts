import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, TableForeignKey, ManyToOne, OneToMany, OneToOne} from 'typeorm';
import { Seccion } from './seccion.entity';
import { Facultad } from './facultad.entity';

@Entity()
export class Escuela {

  public constructor(escuela : any){
    this.escuela_id = escuela.seccion_id;
    this.nombre = escuela.nombre;
    this.description = escuela.description;
    this.status = escuela.status;
    this.created_date = escuela.created_date;
    this.deleted_date = escuela.deleted_date;
  }
  @PrimaryGeneratedColumn()
  escuela_id: number;

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

  @ManyToOne(type => Facultad, facultad => facultad.escuelas)
  facultad: Facultad;

  @OneToMany(type => Seccion, seccion => seccion.escuela)
  secciones: Seccion[];

}