import { Injectable } from '@nestjs/common';
import { CreatePatientAppointmentDto } from './dto/create-patient-appointment.dto';
import { UpdatePatientAppointmentDto } from './dto/update-patient-appointment.dto';

@Injectable()
export class PatientAppointmentService {
  create(createPatientAppointmentDto: CreatePatientAppointmentDto) {
    return 'This action adds a new patientAppointment';
  }

  findAll() {
    return `This action returns all patientAppointment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientAppointment`;
  }

  update(id: number, updatePatientAppointmentDto: UpdatePatientAppointmentDto) {
    return `This action updates a #${id} patientAppointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientAppointment`;
  }
}
