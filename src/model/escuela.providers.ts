import { Connection, Repository } from 'typeorm';
import { Escuela } from './escuela.entity';

export const escuelaProviders = [
  {
    provide: 'ESCUELA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Escuela),
    inject: ['DATABASE_CONNECTION'],
  },
];