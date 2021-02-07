import { Connection, Repository } from 'typeorm';
import { Persona } from './persona.entity';

export const personaProviders = [
  {
    provide: 'PERSONA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Persona),
    inject: ['DATABASE_CONNECTION'],
  },
];