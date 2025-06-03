import { Injectable } from '@nestjs/common';
import { CreatePatientPractitionerFavoriteDto } from './dto/create-patient-practitioner-favorite.dto';
import { UpdatePatientPractitionerFavoriteDto } from './dto/update-patient-practitioner-favorite.dto';

@Injectable()
export class PatientPractitionerFavoriteService {
  create(createPatientPractitionerFavoriteDto: CreatePatientPractitionerFavoriteDto) {
    return 'This action adds a new patientPractitionerFavorite';
  }

  findAll() {
    return `This action returns all patientPractitionerFavorite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientPractitionerFavorite`;
  }

  update(id: number, updatePatientPractitionerFavoriteDto: UpdatePatientPractitionerFavoriteDto) {
    return `This action updates a #${id} patientPractitionerFavorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientPractitionerFavorite`;
  }
}
