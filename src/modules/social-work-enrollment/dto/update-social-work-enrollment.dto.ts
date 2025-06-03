import { PartialType } from '@nestjs/swagger';
import { CreateSocialWorkEnrollmentDto } from './create-social-work-enrollment.dto';

export class UpdateSocialWorkEnrollmentDto extends PartialType(CreateSocialWorkEnrollmentDto) {}
