import { Connection, Repository } from 'typeorm';
import { Registro } from './registro.entity';

export const registroProviders = [
  {
    provide: 'REGISTRO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Registro),
    inject: ['DATABASE_CONNECTION'],
  },
];