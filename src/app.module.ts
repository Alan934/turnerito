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
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { SocialWorkEnrollmentModule } from './modules/social-work-enrollment/social-work-enrollment.module';
import { PractitionerSocialWorkModule } from './modules/practitioner-social-work/practitioner-social-work.module';
import { PatientPractitionerFavoriteModule } from './modules/patient-practitioner-favorite/patient-practitioner-favorite.module';
import { PatientAppointmentModule } from './modules/patient-appointment/patient-appointment.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PatientModule,
    AppointmentModule,
    PractitionerModule,
    AddressModule,
    SocialWorkModule,
    ProfessionalDegreeModule,
    PractitionerRoleModule,
    UserModule,
    CategoryModule,
    SocialWorkEnrollmentModule,
    PractitionerSocialWorkModule,
    PatientPractitionerFavoriteModule,
    PatientAppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
