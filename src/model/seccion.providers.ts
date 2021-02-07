import { Connection, Repository } from 'typeorm';
import { Seccion } from './seccion.entity';

export const seccionProviders = [
  {
    provide: 'SECCION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Seccion),
    inject: ['DATABASE_CONNECTION'],
  },
];