import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreatePractitionerRoleDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsBoolean()
    canPrescribe?: boolean;
}
