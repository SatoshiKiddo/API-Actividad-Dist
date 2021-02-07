import { Connection, Repository } from 'typeorm';
import { Facultad } from './facultad.entity';
import { Persona } from './persona.entity';

export const facultadProviders = [
  {
    provide: 'FACULTAD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Facultad),
    inject: ['DATABASE_CONNECTION'],
  },
];