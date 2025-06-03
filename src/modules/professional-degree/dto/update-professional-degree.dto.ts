import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessionalDegreeDto } from './create-professional-degree.dto';

export class UpdateProfessionalDegreeDto extends PartialType(CreateProfessionalDegreeDto) {}
