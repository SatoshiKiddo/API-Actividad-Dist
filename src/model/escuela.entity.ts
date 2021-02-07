import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, TableForeignKey, ManyToOne, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { Seccion } from './seccion.entity';
import { Facultad } from './facultad.entity';

@Entity()
export class Escuela {

  public constructor(escuela : any){
    if(escuela){
    this.escuela_id = escuela.escuela_id;
    this.nombre = escuela.nombre;
    this.description = escuela.description;
    this.status = escuela.status;
    this.created_date = escuela.created_date;
    this.deleted_date = escuela.deleted_date;
    }
  }
  @PrimaryGeneratedColumn()
  escuela_id: number;

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

  @ManyToOne(type => Facultad, facultad => facultad.escuelas)
  @JoinColumn({ name: "facultad_id_fk" })
  facultad: Facultad;

  @OneToMany(type => Seccion, seccion => seccion.escuela)
  secciones: Seccion[];

}