import { PartialType } from '@nestjs/swagger';
import { CreatePatientPractitionerFavoriteDto } from './create-patient-practitioner-favorite.dto';

export class UpdatePatientPractitionerFavoriteDto extends PartialType(CreatePatientPractitionerFavoriteDto) {}
