import { Injectable } from '@nestjs/common';
import { CreateSocialWorkDto } from './dto/create-social-work.dto';
import { UpdateSocialWorkDto } from './dto/update-social-work.dto';

@Injectable()
export class SocialWorkService {
  create(createSocialWorkDto: CreateSocialWorkDto) {
    return 'This action adds a new socialWork';
  }

  findAll() {
    return `This action returns all socialWork`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialWork`;
  }

  update(id: number, updateSocialWorkDto: UpdateSocialWorkDto) {
    return `This action updates a #${id} socialWork`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialWork`;
  }
}
