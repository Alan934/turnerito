import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './modules/patient/patient.module';
import { AppointmentModule } from './modules/appointment/appointment.module';
import { PractitionerModule } from './modules/practitioner/practitioner.module';
import { AddressModule } from './modules/address/address.module';
import { SocialWorkModule } from './modules/social-work/social-work.module';
import { ProfessionalDegreeModule } from './modules/professional-degree/professional-degree.module';
import { PractitionerRoleModule } from './modules/practitioner-role/practitioner-role.module';

@Module({
  imports: [PatientModule, AppointmentModule, PractitionerModule, AddressModule, SocialWorkModule, ProfessionalDegreeModule, PractitionerRoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
