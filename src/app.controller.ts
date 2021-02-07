import { Controller, Get, Param, Post, Req, Request, UseGuards, Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { DaoService } from 'src/dao/dao.service';
import { Persona } from './model/persona.entity';
import { Registro } from './model/registro.entity';
import { Seccion } from './model/seccion.entity';
import { Escuela } from './model/escuela.entity';
import { Facultad } from './model/facultad.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly daoService: DaoService
    ) {}

  @Get('persona/:id')
  public async getPersona(@Param('id') id: number) {
    return this.daoService.findOnePersona(id);
  }

  @Get('persona/all')
  public async getAllPersona(@Request() req) {
    return this.daoService.findAllPersona();
  }

  @Post('persona/update')
  public async modifyPersona(@Request() req) {
    return this.daoService.updateOnePersona(new Persona(req.persona));
  }

  @Delete('persona/remove/:id')
  public async removePersona(@Param('id') id: number) {
    return this.daoService.removePersona(id);
  }

  @Get('seccion/:id')
  public async getSeccion(@Param('id') id: number) {
    return this.daoService.findOneSeccion(id);
  }

  @Get('seccion/all')
  public async getAllSeccion(@Request() req) {
    return this.daoService.findAllSeccion();
  }

  @Post('seccion/update')
  public async modifySeccion(@Request() req) {
    return this.daoService.updateOneSeccion(new Seccion(req.registro));
  }

  @Delete('seccion/remove/:id')
  public async removeSeccion(@Param('id') id: number) {
    return this.daoService.removeSeccion(id);
  }

  @Get('escuela/:id')
  public async getEscuela(@Param('id') id: number) {
    return this.daoService.findOneEscuela(id);
  }

  @Get('escuela/all')
  public async getAllEscuela(@Request() req) {
    return this.daoService.findAllEscuela();
  }

  @Post('escuela/update')
  public async modifyEscuela(@Request() req) {
    return this.daoService.updateOneEscuela(new Escuela(req.registro));
  }

  @Delete('escuela/remove/:id')
  public async removeEscuela(@Param('id') id: number) {
    return this.daoService.removeEscuela(id);
  }

  @Get('facultad/:id')
  public async getFacultad(@Param('id') id: number) {
    return this.daoService.findOneFacultad(id);
  }

  @Get('facultad/all')
  public async getAllFacultad(@Request() req) {
    return this.daoService.findAllFacultad();
  }

  @Post('facultad/update')
  public async modifyFacultad(@Request() req) {
    return this.daoService.updateOneFacultad(new Facultad(req.registro));
  }

  @Delete('facultad/remove/:id')
  public async removeFacultad(@Param('id') id: number) {
    return this.daoService.removeFacultad(id);
  }

  @Get('registro/:id')
  public async getRegistro(@Param('id') id: number) {
    return this.daoService.findOneRegistro(id);
  }

  @Get('registro/all')
  public async getAllRegistro(@Request() req) {
    return this.daoService.findAllRegistro();
  }

  @Post('registro/update')
  public async modifyRegistro(@Request() req) {
    return this.daoService.updateOneRegistro(new Registro(req.registro));
  }

  @Delete('registro/remove/:id')
  public async removeRegistro(@Param('id') id: number) {
    return this.daoService.removeRegistro(id);
  }

}
