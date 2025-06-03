import { IsString } from 'class-validator';

export class CreateProfessionalDegreeDto {
    @IsString()
    name: string;
}
