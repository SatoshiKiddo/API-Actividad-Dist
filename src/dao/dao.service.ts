import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Facultad } from '../model/facultad.entity';
import { Escuela } from 'src/model/escuela.entity';
import { Seccion } from 'src/model/seccion.entity';
import { Persona } from '../model/persona.entity';
import { Registro} from '../model/registro.entity';
import { Connection, QueryRunner} from 'typeorm';

@Injectable()
export class DaoService {
  constructor(
    @InjectRepository(Facultad)
    private FacultadRepository: Repository<Facultad>,
    private SeccionRepository: Repository<Seccion>,
    private EscuelaRepository: Repository<Escuela>,
    private RegistroRepository: Repository<Registro>,
    private PersonaRepository: Repository<Persona>,
    private connection: Connection,
  ) {}

  updateOneFacultad(facultad: Facultad): Promise<Facultad> {
    return this.FacultadRepository.save(facultad);
  }

  findAllFacultad(): Promise<Facultad[]> {
    return this.FacultadRepository.find();
  }

  findOneFacultad(id: number): Promise<Facultad> {
    return this.FacultadRepository.findOne(id);
  }

  removeFacultad (id: number): Promise<any> {
    var facultad_u;
    this.FacultadRepository.findOne(id).then( facultad => {
      facultad.deleted_date = new Date(Date.now());
      facultad.status = "disabled"
      facultad_u = facultad;
    });
    return this.FacultadRepository.save(facultad_u);
  }

  updateOneEscuela(escuela: Escuela): Promise<Escuela> {
    return this.FacultadRepository.save(escuela);
  }

  findAllEscuela(): Promise<Escuela[]> {
    return this.EscuelaRepository.find();
  }

  findOneEscuela(id: number): Promise<Escuela> {
    return this.EscuelaRepository.findOne(id);
  }

  removeEscuela (id: number): Promise<any> {
    var escuela_u;
    this.EscuelaRepository.findOne(id).then( escuela => {
      escuela.deleted_date = new Date(Date.now());
      escuela.status = "disabled";
      escuela_u = escuela;
    });
    return this.EscuelaRepository.save(escuela_u);
  }

  updateOneSeccion(seccion: Seccion): Promise<Seccion> {
    return this.FacultadRepository.save(seccion);
  }

  findAllSeccion(): Promise<Seccion[]> {
    return this.SeccionRepository.find();
  }

  findOneSeccion(id: number): Promise<Seccion> {
    return this.SeccionRepository.findOne(id);
  }

  removeSeccion (id: number): Promise<any> {
    var seccion_u;
    this.SeccionRepository.findOne(id).then( seccion=> {
      seccion.deleted_date = new Date(Date.now());
      seccion.status = "disabled";
      seccion_u = seccion;
    });
    return this.SeccionRepository.save(seccion_u);
  }

  updateOneRegistro(registro: Registro): Promise<Registro> {
    return this.FacultadRepository.save(registro);
  }

  findAllRegistro(): Promise<Registro[]> {
    return this.RegistroRepository.find();
  }

  findOneRegistro(id: number): Promise<Registro> {
    return this.RegistroRepository.findOne(id);
  }

  removeRegistro (id: number): Promise<any> {
    var registro_u;
    this.RegistroRepository.findOne(id).then( registro => {
      registro.deleted_date = new Date(Date.now());
      registro.status = "disabled";
      registro_u = registro;
    });
    return this.RegistroRepository.save(registro_u);
  }

  updateOnePersona(persona: Persona): Promise<Persona> {
    return this.FacultadRepository.save(persona);
  }

  findAllPersona(): Promise<Persona[]> {
    return this.PersonaRepository.find();
  }

  findOnePersona(id: number): Promise<Persona> {
    return this.PersonaRepository.findOne(id);
  }

  removePersona (id: number): Promise<any> {
    var persona_u;
    this.PersonaRepository.findOne(id).then( persona => {
      persona.deleted_date = new Date(Date.now());
      persona.status = "disabled";
      persona_u = persona;
    });
    return this.PersonaRepository.save(persona_u);
  }

}
