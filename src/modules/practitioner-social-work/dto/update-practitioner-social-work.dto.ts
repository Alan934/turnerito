import { PartialType } from '@nestjs/swagger';
import { CreatePractitionerSocialWorkDto } from './create-practitioner-social-work.dto';

export class UpdatePractitionerSocialWorkDto extends PartialType(CreatePractitionerSocialWorkDto) {}
