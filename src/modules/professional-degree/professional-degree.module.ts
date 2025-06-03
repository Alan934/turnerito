import { Module } from '@nestjs/common';
import { ProfessionalDegreeService } from './professional-degree.service';
import { ProfessionalDegreeController } from './professional-degree.controller';

@Module({
  controllers: [ProfessionalDegreeController],
  providers: [ProfessionalDegreeService],
})
export class ProfessionalDegreeModule {}
