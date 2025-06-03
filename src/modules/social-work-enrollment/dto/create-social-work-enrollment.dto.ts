import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreateSocialWorkEnrollmentDto {
    @IsOptional()
    @IsString()
    memberNum?: string;

    @IsOptional()
    @IsString()
    plan?: string;

    @IsOptional()
    @IsUUID()
    socialWorkId?: string;

    @IsOptional()
    @IsUUID()
    patientId?: string;
}
