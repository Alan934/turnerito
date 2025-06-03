import { Module } from '@nestjs/common';
import { PractitionerRoleService } from './practitioner-role.service';
import { PractitionerRoleController } from './practitioner-role.controller';

@Module({
  controllers: [PractitionerRoleController],
  providers: [PractitionerRoleService],
})
export class PractitionerRoleModule {}
