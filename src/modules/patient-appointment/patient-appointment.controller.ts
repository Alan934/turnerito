import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientAppointmentService } from './patient-appointment.service';
import { CreatePatientAppointmentDto } from './dto/create-patient-appointment.dto';
import { UpdatePatientAppointmentDto } from './dto/update-patient-appointment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Patient-appointment')
@Controller('patient-appointment')
export class PatientAppointmentController {
  constructor(private readonly patientAppointmentService: PatientAppointmentService) {}

  @Post()
  create(@Body() createPatientAppointmentDto: CreatePatientAppointmentDto) {
    return this.patientAppointmentService.create(createPatientAppointmentDto);
  }

  @Get()
  findAll() {
    return this.patientAppointmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientAppointmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientAppointmentDto: UpdatePatientAppointmentDto) {
    return this.patientAppointmentService.update(+id, updatePatientAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientAppointmentService.remove(+id);
  }
}
