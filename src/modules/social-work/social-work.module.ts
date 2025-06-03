import { Module } from '@nestjs/common';
import { SocialWorkService } from './social-work.service';
import { SocialWorkController } from './social-work.controller';

@Module({
  controllers: [SocialWorkController],
  providers: [SocialWorkService],
})
export class SocialWorkModule {}
