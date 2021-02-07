import { Module } from '@nestjs/common';
import { DaoService } from './dao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository, } from 'typeorm';
import { Facultad } from '../model/facultad.entity';
import { Escuela } from 'src/model/escuela.entity';
import { Seccion } from 'src/model/seccion.entity';
import { Persona } from '../model/persona.entity';
import { Registro} from '../model/registro.entity';
import { personaProviders } from '../model/persona.providers';
import { databaseProviders } from './database.providers';
import { facultadProviders } from 'src/model/facultad.providers';
import { registroProviders } from 'src/model/registro.providers';
import { escuelaProviders } from 'src/model/escuela.providers';
import { seccionProviders } from 'src/model/seccion.providers';
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
  }), TypeOrmModule
  ],
  providers: [DaoService, Repository, ...registroProviders, ...escuelaProviders, ...seccionProviders, ...facultadProviders, ...personaProviders, ...databaseProviders],
  exports: [DaoService, TypeOrmModule, Repository],
})
export class DaoModule {}
