import { PartialType } from '@nestjs/mapped-types';
import { CreatePractitionerRoleDto } from './create-practitioner-role.dto';

export class UpdatePractitionerRoleDto extends PartialType(CreatePractitionerRoleDto) {}
