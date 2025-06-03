import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialWorkService } from './social-work.service';
import { CreateSocialWorkDto } from './dto/create-social-work.dto';
import { UpdateSocialWorkDto } from './dto/update-social-work.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Social-work')
@Controller('social-work')
export class SocialWorkController {
  constructor(private readonly socialWorkService: SocialWorkService) {}

  @Post()
  create(@Body() createSocialWorkDto: CreateSocialWorkDto) {
    return this.socialWorkService.create(createSocialWorkDto);
  }

  @Get()
  findAll() {
    return this.socialWorkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialWorkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialWorkDto: UpdateSocialWorkDto) {
    return this.socialWorkService.update(+id, updateSocialWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialWorkService.remove(+id);
  }
}
