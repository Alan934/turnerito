import { Module } from '@nestjs/common';
import { PractitionerSocialWorkService } from './practitioner-social-work.service';
import { PractitionerSocialWorkController } from './practitioner-social-work.controller';

@Module({
  controllers: [PractitionerSocialWorkController],
  providers: [PractitionerSocialWorkService],
})
export class PractitionerSocialWorkModule {}
