import { Injectable } from '@nestjs/common';
import { CreateProfessionalDegreeDto } from './dto/create-professional-degree.dto';
import { UpdateProfessionalDegreeDto } from './dto/update-professional-degree.dto';

@Injectable()
export class ProfessionalDegreeService {
  create(createProfessionalDegreeDto: CreateProfessionalDegreeDto) {
    return 'This action adds a new professionalDegree';
  }

  findAll() {
    return `This action returns all professionalDegree`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professionalDegree`;
  }

  update(id: number, updateProfessionalDegreeDto: UpdateProfessionalDegreeDto) {
    return `This action updates a #${id} professionalDegree`;
  }

  remove(id: number) {
    return `This action removes a #${id} professionalDegree`;
  }
}
