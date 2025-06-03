import { Injectable } from '@nestjs/common';
import { CreatePractitionerSocialWorkDto } from './dto/create-practitioner-social-work.dto';
import { UpdatePractitionerSocialWorkDto } from './dto/update-practitioner-social-work.dto';

@Injectable()
export class PractitionerSocialWorkService {
  create(createPractitionerSocialWorkDto: CreatePractitionerSocialWorkDto) {
    return 'This action adds a new practitionerSocialWork';
  }

  findAll() {
    return `This action returns all practitionerSocialWork`;
  }

  findOne(id: number) {
    return `This action returns a #${id} practitionerSocialWork`;
  }

  update(id: number, updatePractitionerSocialWorkDto: UpdatePractitionerSocialWorkDto) {
    return `This action updates a #${id} practitionerSocialWork`;
  }

  remove(id: number) {
    return `This action removes a #${id} practitionerSocialWork`;
  }
}
