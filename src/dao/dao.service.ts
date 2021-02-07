import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, InsertResult, Repository } from 'typeorm';
import { Facultad } from '../model/facultad.entity';
import { Escuela } from 'src/model/escuela.entity';
import { Seccion } from 'src/model/seccion.entity';
import { Persona } from '../model/persona.entity';
import { Registro} from '../model/registro.entity';
import { Connection, QueryRunner} from 'typeorm';

@Injectable()
export class DaoService {
  constructor(
    @Inject('SECCION_REPOSITORY')
    private SeccionRepository: Repository<Seccion>,
    @Inject('ESCUELA_REPOSITORY')
    private EscuelaRepository: Repository<Escuela>,
    @Inject('REGISTRO_REPOSITORY')
    private RegistroRepository: Repository<Registro>,
    @Inject('FACULTAD_REPOSITORY')
    private FacultadRepository: Repository<Facultad>,
    @Inject('PERSONA_REPOSITORY')
    private PersonaRepository: Repository<Persona>,
    private connection: Connection,
  ) {}

  addFacultad(facultad:Facultad): any{
    this.FacultadRepository.findOne(facultad.facultad_id).then(facultadT => {
      if(!facultadT){
        this.FacultadRepository.save(facultad);
        return { respuesta: 'Insercion exitosa'}
      }
    });
    return{ error: 'Ya hay una facultad existente.'}
  }

  updateOneFacultad(facultad: Facultad): any {
    this.FacultadRepository.findOne(facultad.facultad_id).then(facultadT => {
      if(facultadT){
        this.FacultadRepository.save(facultad);
        return { respuesta: 'Actualizacion exitosa'}
      }
    });
    return{ error: 'No existe dicha facultad.'}
  }

  findAllFacultad(): Promise<any[]> {
    return this.FacultadRepository.find();
  }

  findOneFacultad(id: number): Promise<any> {
    return this.FacultadRepository.findOne(id);
  }

  removeFacultad (id: number): any {
    var facultad_u;
    this.FacultadRepository.findOne(id).then( facultad => {
      if (facultad){
        facultad.deleted_date = new Date(Date.now());
        facultad.status = "disabled"
        facultad_u = facultad;
        this.FacultadRepository.save(facultad_u);
        return {respuesta: 'Eliminacion exitosa'}
      }
    });
    return{ error: 'No existe dicha facultad.'}
  }

  addEscuela(escuela:Escuela): any{
    this.EscuelaRepository.findOne(escuela.escuela_id).then(escuelaT => {
      if(!escuelaT){
        this.EscuelaRepository.save(escuela);
        return { respuesta: 'Insercion exitosa'}
      }
    });
    return{ error: 'Ya hay una escuela existente.'}
  }

  updateOneEscuela(escuela: Escuela): any {
    this.EscuelaRepository.findOne(escuela.escuela_id).then(escuelaT => {
      if(escuelaT){
        this.FacultadRepository.save(escuela);
        return { respuesta: 'Actualizacion exitosa'}
      }
    });
    return{ error: 'No existe dicha escuela'}
  }

  findAllEscuela(): Promise<Escuela[]> {
    return this.EscuelaRepository.find();
  }

  findOneEscuela(id: number): Promise<any> {
    return this.EscuelaRepository.findOne(id);
  }

  removeEscuela (id: number): any {
    var escuela_u;
    this.EscuelaRepository.findOne(id).then( escuela => {
      if( escuela){
        escuela.deleted_date = new Date(Date.now());
        escuela.status = "disabled";
        escuela_u = escuela;
        this.EscuelaRepository.save(escuela_u);
        return {respuesta: 'Eliminacion exitosa'}
      }
    });
    return{ error: 'No existe dicha escuela.'}
  }

  addSeccion(seccion:Seccion): any{
    this.SeccionRepository.findOne(seccion.seccion_id).then(seccionT => {
      if(!seccionT){
        this.SeccionRepository.save(seccion);
      }
    });
    return{ error: 'Ya hay una seccion existente.'}
  }

  updateOneSeccion(seccion: Seccion): any {
    this.SeccionRepository.findOne(seccion.seccion_id).then(seccionT => {
      if(seccionT){
        this.FacultadRepository.save(seccion);
        return { respuesta: 'Actualizacion exitosa'}
      }
    });
    return{ error: 'No existe dicha seccion'}
  }

  findAllSeccion(): Promise<Seccion[]> {
    return this.SeccionRepository.find();
  }

  findOneSeccion(id: number): Promise<any> {
    return this.SeccionRepository.findOne(id);
  }

  removeSeccion (id: number): any {
    var seccion_u;
    this.SeccionRepository.findOne(id).then( seccionT=> {
      if(seccionT){
        seccionT.deleted_date = new Date(Date.now());
        seccionT.status = "disabled";
        seccion_u = seccionT;
        this.SeccionRepository.save(seccion_u);
        return {respuesta: 'Eliminacion exitosa'}
      }
    });
    return{ error: 'No existe dicha seccion.'}
  }

  addRegistro(registro:Registro): any{
    this.RegistroRepository.findOne(registro.registro_id).then(registroT => {
      if(!registroT){
        createQueryBuilder("Registro")
        .innerJoinAndSelect("Registro.persona", "Persona")
        .innerJoinAndSelect("Registro.seccion", "Seccion")
        .where("persona.persona_id = :id", { id: registro.persona.persona_id})
        .andWhere("seccion.seccion_id = :id2", { id2: registro.seccion.seccion_id})
        .getMany().then( cuerpo => {
          if (!cuerpo){
            this.FacultadRepository.save(registro);
            return { respuesta: 'Insercion exitosa'}
          }
        });
      }
    });
    return{ error: 'Ya hay una registro existente.'}
  }

  updateOneRegistro(registro: Registro): any {
    this.RegistroRepository.findOne(registro.registro_id).then(registroT => {
      if(registroT){
          this.FacultadRepository.save(registro);
          return { respuesta: 'Actualizacion exitosa'}
      }
    });
    return{ error: 'No existe dicha seccion'}
  }

  findAllRegistro(): Promise<any[]> {
    return this.RegistroRepository.find();
  }

  findOneRegistro(id: number): Promise<any> {
    return this.RegistroRepository.findOne(id);
  }

  removeRegistro (id: number): any {
    var registro_u;
    this.RegistroRepository.findOne(id).then( registro => {
      if(registro){
      registro.deleted_date = new Date(Date.now());
      registro.status = "disabled";
      registro_u = registro;
      this.RegistroRepository.save(registro_u);
      return{ respuesta: 'Eliminacion exitosa.'};
      }
    });
    return{ error: 'No existe dicho registro.'};
  }

  addPersona(persona:Persona): any{
    this.PersonaRepository.findOne(persona.persona_id).then(personaT => {
      if(!personaT){
        this.PersonaRepository.save(persona);
        return{ respuesta: 'Insercion exitosa.'};
      }
    });
    return{ error: 'Ya hay una persona existente.'}
  }

  updateOnePersona(persona: Persona): any {
    this.PersonaRepository.findOne(persona.persona_id).then(personaT => {
      if(personaT){
        this.FacultadRepository.save(persona);
        return { respuesta: 'Actualizacion exitosa'}
      }
    });
    return{ error: 'No existe dicha seccion'}
  }

  findAllPersona(): Promise<any[]> {
    return this.PersonaRepository.find();
  }

  findOnePersona(id: number): Promise<any> {
    return this.PersonaRepository.findOne(id);
  }

  removePersona (id: number): any {
    var persona_u;
    this.PersonaRepository.findOne(id).then( persona => {
      if(persona){
      persona.deleted_date = new Date(Date.now());
      persona.status = "disabled";
      persona_u = persona;
      this.PersonaRepository.save(persona_u);
      return{ respuesta: 'Eliminacion exitosa.'};
      }
    });
    return{ error: 'No existe dicho registro.'};
  }

  findAllPersonaInSeccionPorTipo(id: number, tipo: string): any {
    return createQueryBuilder("Persona")
    .innerJoin("Persona.registros", "Registro")
    .innerJoin("Registro.seccion", "Seccion")
    .where("Seccion.seccion_id = :id", { id: id})
    .andWhere("Registro.tipo = :tipo", {tipo: tipo})
    .getMany()
  }

}
