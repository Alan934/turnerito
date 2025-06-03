import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialWorkEnrollmentService } from './social-work-enrollment.service';
import { CreateSocialWorkEnrollmentDto } from './dto/create-social-work-enrollment.dto';
import { UpdateSocialWorkEnrollmentDto } from './dto/update-social-work-enrollment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Social-work-enrollment')
@Controller('social-work-enrollment')
export class SocialWorkEnrollmentController {
  constructor(private readonly socialWorkEnrollmentService: SocialWorkEnrollmentService) {}

  @Post()
  create(@Body() createSocialWorkEnrollmentDto: CreateSocialWorkEnrollmentDto) {
    return this.socialWorkEnrollmentService.create(createSocialWorkEnrollmentDto);
  }

  @Get()
  findAll() {
    return this.socialWorkEnrollmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialWorkEnrollmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialWorkEnrollmentDto: UpdateSocialWorkEnrollmentDto) {
    return this.socialWorkEnrollmentService.update(+id, updateSocialWorkEnrollmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialWorkEnrollmentService.remove(+id);
  }
}
