import { Injectable } from '@nestjs/common';
import { CreatePractitionerRoleDto } from './dto/create-practitioner-role.dto';
import { UpdatePractitionerRoleDto } from './dto/update-practitioner-role.dto';

@Injectable()
export class PractitionerRoleService {
  create(createPractitionerRoleDto: CreatePractitionerRoleDto) {
    return 'This action adds a new practitionerRole';
  }

  findAll() {
    return `This action returns all practitionerRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} practitionerRole`;
  }

  update(id: number, updatePractitionerRoleDto: UpdatePractitionerRoleDto) {
    return `This action updates a #${id} practitionerRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} practitionerRole`;
  }
}
