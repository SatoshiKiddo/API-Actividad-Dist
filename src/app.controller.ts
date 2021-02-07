import { Controller, Get, Param, Post, Req, Body, Request, UseGuards, Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { DaoService } from 'src/dao/dao.service';
import { Persona } from './model/persona.entity';
import { Registro } from './model/registro.entity';
import { Seccion } from './model/seccion.entity';
import { Escuela } from './model/escuela.entity';
import { Facultad } from './model/facultad.entity';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly daoService: DaoService,
    ) {
    }

  @ApiTags('Persona')
  @ApiBody({})
  @Post('persona/add')
  public async addPersona(@Request() req) {
    return this.daoService.addPersona(new Persona(req.persona));
  }

  @ApiTags('Persona')
  @Get('persona/get/:id')
  public async getPersona(@Param('id') id: number) {
    return this.daoService.findOnePersona(id);
  }

  @ApiTags('Persona')
  @Get('persona/all/')
  public async getAllPersona(@Request() req) {
    return this.daoService.findAllPersona();
  }

  @ApiTags('Persona')
  @ApiBody({})
  @Post('persona/update')
  public async modifyPersona(@Request() req) {
    return this.daoService.updateOnePersona(new Persona(req.persona));
  }

  @ApiTags('Persona')
  @Delete('persona/remove/:id')
  public async removePersona(@Param('id') id: number) {
    return this.daoService.removePersona(id);
  }

  @ApiTags('Inscripcion')
  @ApiBody({})
  @Post('seccion/add')
  public async addSeccion(@Request() req) {
    return this.daoService.addSeccion(new Seccion(req.seccion));
  }

  @ApiTags('Seccion')
  @Get('seccion/estudiantes/:id')
  public async getSeccionEstudiantes(@Param('id') id: number) {
    return this.daoService.findAllPersonaInSeccionPorTipo(id, 'student');
  }

  @ApiTags('Seccion')
  @Get('seccion/profesores/:id')
  public async getSeccionProfesores(@Param('id') id: number) {
    return this.daoService.findAllPersonaInSeccionPorTipo(id, 'teacher');
  }

  @ApiTags('Seccion')
  @Get('seccion/get/:id')
  public async getSeccion(@Param('id') id: number) {
    return this.daoService.findOneSeccion(id);
  }

  @ApiTags('Seccion')
  @Get('seccion/all')
  public async getAllSeccion(@Request() req) {
    return this.daoService.findAllSeccion();
  }

  @ApiTags('Seccion')
  @Post('seccion/update')
  @ApiBody({})
  public async modifySeccion(@Request() req) {
    return this.daoService.updateOneSeccion(new Seccion(req.registro));
  }

  @ApiTags('Seccion')
  @Delete('seccion/remove/:id')
  public async removeSeccion(@Param('id') id: number) {
    return this.daoService.removeSeccion(id);
  }

  @ApiTags('Escuela')
  @ApiBody({})
  @Post('escuela/add')
  public async addEscuela(@Request() req) {
    return this.daoService.addEscuela(new Escuela(req.escuela));
  }

  @ApiTags('Escuela')
  @Get('escuela/get/:id')
  public async getEscuela(@Param('id') id: number) {
    return this.daoService.findOneEscuela(id);
  }

  @ApiTags('Escuela')
  @Get('escuela/all')
  public async getAllEscuela(@Request() req) {
    return this.daoService.findAllEscuela();
  }

  @ApiTags('Escuela')
  @ApiBody({})
  @Post('escuela/update')
  public async modifyEscuela(@Request() req) {
    return this.daoService.updateOneEscuela(new Escuela(req.registro));
  }

  @ApiTags('Escuela')
  @Delete('escuela/remove/:id')
  public async removeEscuela(@Param('id') id: number) {
    return this.daoService.removeEscuela(id);
  }

  @ApiTags('Facultad')
  @ApiBody({})
  @Post('facultad/add')
  public async addFacultad(@Request() req) {
    return this.daoService.addFacultad(new Facultad(req.facultad));
  }

  @ApiTags('Facultad')
  @Get('facultad/get/:id')
  public async getFacultad(@Param('id') id: number) {
    return this.daoService.findOneFacultad(id);
  }

  @ApiTags('Facultad')
  @Get('facultad/all')
  public async getAllFacultad(@Request() req) {
    return this.daoService.findAllFacultad();
  }

  @ApiTags('Facultad')
  @ApiBody({})
  @Post('facultad/update')
  public async modifyFacultad(@Request() req) {
    return this.daoService.updateOneFacultad(new Facultad(req.registro));
  }

  @ApiTags('Facultad')
  @Delete('facultad/remove/:id')
  public async removeFacultad(@Param('id') id: number) {
    return this.daoService.removeFacultad(id);
  }

  @ApiTags('Registro')
  @ApiBody({})
  @Post('registro/add')
  public async addRegistro(@Request() req) {
    return this.daoService.addRegistro(new Registro(req.registro));
  }

  @ApiTags('Registro')
  @Get('registro/get/:id')
  public async getRegistro(@Param('id') id: number) {
    return this.daoService.findOneRegistro(id);
  }

  @ApiTags('Registro')
  @Get('registro/all')
  public async getAllRegistro(@Request() req) {
    return this.daoService.findAllRegistro();
  }

  @ApiTags('Registro')
  @ApiBody({})
  @Post('registro/update')
  public async modifyRegistro(@Request() req) {
    return this.daoService.updateOneRegistro(new Registro(req.registro));
  }

  @ApiTags('Registro')
  @Delete('registro/remove/:id')
  public async removeRegistro(@Param('id') id: number) {
    return this.daoService.removeRegistro(id);
  }

}
