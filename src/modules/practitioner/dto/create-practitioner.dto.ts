import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { Gender } from '../../../common/enums/gender.enum';
import { DocumentType } from '../../../common/enums/document-type.enum';
export class CreatePractitionerDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;

    @IsOptional()
    @IsString()
    birth?: string;

    @IsOptional()
    @IsEnum(DocumentType)
    documentType?: DocumentType;

    @IsOptional()
    @IsString()
    dni?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    urlImg?: string;

    @IsOptional()
    @IsString()
    license?: string;

    @IsOptional()
    @IsNumber()
    rating?: number;

    @IsOptional()
    @IsBoolean()
    homeService?: boolean;

    @IsOptional()
    @IsNumber()
    durationAppointment?: number;

    @IsOptional()
    @IsBoolean()
    acceptedSocialWorks?: boolean;

    @IsOptional()
    @IsString()
    consultationTime?: string;

    @IsOptional()
    @IsUUID()
    professionalDegreeId?: string;
}
