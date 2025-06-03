import { Module } from '@nestjs/common';
import { PatientPractitionerFavoriteService } from './patient-practitioner-favorite.service';
import { PatientPractitionerFavoriteController } from './patient-practitioner-favorite.controller';

@Module({
  controllers: [PatientPractitionerFavoriteController],
  providers: [PatientPractitionerFavoriteService],
})
export class PatientPractitionerFavoriteModule {}
