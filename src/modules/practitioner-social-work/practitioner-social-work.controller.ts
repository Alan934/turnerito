import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PractitionerSocialWorkService } from './practitioner-social-work.service';
import { CreatePractitionerSocialWorkDto } from './dto/create-practitioner-social-work.dto';
import { UpdatePractitionerSocialWorkDto } from './dto/update-practitioner-social-work.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Practitioner-social-work')
@Controller('practitioner-social-work')
export class PractitionerSocialWorkController {
  constructor(private readonly practitionerSocialWorkService: PractitionerSocialWorkService) {}

  @Post()
  create(@Body() createPractitionerSocialWorkDto: CreatePractitionerSocialWorkDto) {
    return this.practitionerSocialWorkService.create(createPractitionerSocialWorkDto);
  }

  @Get()
  findAll() {
    return this.practitionerSocialWorkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practitionerSocialWorkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePractitionerSocialWorkDto: UpdatePractitionerSocialWorkDto) {
    return this.practitionerSocialWorkService.update(+id, updatePractitionerSocialWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practitionerSocialWorkService.remove(+id);
  }
}
