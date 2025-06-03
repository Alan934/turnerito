import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientPractitionerFavoriteService } from './patient-practitioner-favorite.service';
import { CreatePatientPractitionerFavoriteDto } from './dto/create-patient-practitioner-favorite.dto';
import { UpdatePatientPractitionerFavoriteDto } from './dto/update-patient-practitioner-favorite.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Patient-practitioner-favorite')
@Controller('patient-practitioner-favorite')
export class PatientPractitionerFavoriteController {
  constructor(private readonly patientPractitionerFavoriteService: PatientPractitionerFavoriteService) {}

  @Post()
  create(@Body() createPatientPractitionerFavoriteDto: CreatePatientPractitionerFavoriteDto) {
    return this.patientPractitionerFavoriteService.create(createPatientPractitionerFavoriteDto);
  }

  @Get()
  findAll() {
    return this.patientPractitionerFavoriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientPractitionerFavoriteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientPractitionerFavoriteDto: UpdatePatientPractitionerFavoriteDto) {
    return this.patientPractitionerFavoriteService.update(+id, updatePatientPractitionerFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientPractitionerFavoriteService.remove(+id);
  }
}
