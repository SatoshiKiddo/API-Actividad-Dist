import { Module } from '@nestjs/common';
import { DaoService } from './dao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository, } from 'typeorm';
import { Facultad } from '../model/facultad.entity';
import { Escuela } from 'src/model/escuela.entity';
import { Seccion } from 'src/model/seccion.entity';
import { Persona } from '../model/persona.entity';
import { Registro} from '../model/registro.entity';
//Se deben agregar las entidades vinculadas aca.

@Module({
  imports: [TypeOrmModule.forFeature([]),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'api-distribuidos',
    entities: [Facultad, Escuela, Seccion, Registro, Persona],
    synchronize: false,
  }),
  ],
  providers: [DaoService, Repository],
  exports: [DaoService, TypeOrmModule],
})
export class DaoModule {}
