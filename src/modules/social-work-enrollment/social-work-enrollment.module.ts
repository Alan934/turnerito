import { Module } from '@nestjs/common';
import { SocialWorkEnrollmentService } from './social-work-enrollment.service';
import { SocialWorkEnrollmentController } from './social-work-enrollment.controller';

@Module({
  controllers: [SocialWorkEnrollmentController],
  providers: [SocialWorkEnrollmentService],
})
export class SocialWorkEnrollmentModule {}
