import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PractitionerRoleService } from './practitioner-role.service';
import { CreatePractitionerRoleDto } from './dto/create-practitioner-role.dto';
import { UpdatePractitionerRoleDto } from './dto/update-practitioner-role.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Practitioner-role')
@Controller('practitioner-role')
export class PractitionerRoleController {
  constructor(private readonly practitionerRoleService: PractitionerRoleService) {}

  @Post()
  create(@Body() createPractitionerRoleDto: CreatePractitionerRoleDto) {
    return this.practitionerRoleService.create(createPractitionerRoleDto);
  }

  @Get()
  findAll() {
    return this.practitionerRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practitionerRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePractitionerRoleDto: UpdatePractitionerRoleDto) {
    return this.practitionerRoleService.update(+id, updatePractitionerRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practitionerRoleService.remove(+id);
  }
}
