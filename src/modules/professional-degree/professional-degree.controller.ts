import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessionalDegreeService } from './professional-degree.service';
import { CreateProfessionalDegreeDto } from './dto/create-professional-degree.dto';
import { UpdateProfessionalDegreeDto } from './dto/update-professional-degree.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Professional-degree')
@Controller('professional-degree')
export class ProfessionalDegreeController {
  constructor(private readonly professionalDegreeService: ProfessionalDegreeService) {}

  @Post()
  create(@Body() createProfessionalDegreeDto: CreateProfessionalDegreeDto) {
    return this.professionalDegreeService.create(createProfessionalDegreeDto);
  }

  @Get()
  findAll() {
    return this.professionalDegreeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionalDegreeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessionalDegreeDto: UpdateProfessionalDegreeDto) {
    return this.professionalDegreeService.update(+id, updateProfessionalDegreeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionalDegreeService.remove(+id);
  }
}
