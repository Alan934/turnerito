import { Injectable } from '@nestjs/common';
import { CreateSocialWorkEnrollmentDto } from './dto/create-social-work-enrollment.dto';
import { UpdateSocialWorkEnrollmentDto } from './dto/update-social-work-enrollment.dto';

@Injectable()
export class SocialWorkEnrollmentService {
  create(createSocialWorkEnrollmentDto: CreateSocialWorkEnrollmentDto) {
    return 'This action adds a new socialWorkEnrollment';
  }

  findAll() {
    return `This action returns all socialWorkEnrollment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialWorkEnrollment`;
  }

  update(id: number, updateSocialWorkEnrollmentDto: UpdateSocialWorkEnrollmentDto) {
    return `This action updates a #${id} socialWorkEnrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialWorkEnrollment`;
  }
}
