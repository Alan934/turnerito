import { Module } from '@nestjs/common';
import { PatientAppointmentService } from './patient-appointment.service';
import { PatientAppointmentController } from './patient-appointment.controller';

@Module({
  controllers: [PatientAppointmentController],
  providers: [PatientAppointmentService],
})
export class PatientAppointmentModule {}
