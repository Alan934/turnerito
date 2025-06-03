import { IsBoolean, IsEnum, IsOptional, IsString, IsUUID } from "class-validator";
import { AppointmentStatus } from "../../../common/enums/appointment-status.enum";

export class CreateAppointmentDto {
    @IsString()
    date: string;

    @IsString()
    hour: string;

    @IsOptional()
    @IsString()
    observation?: string;

    @IsOptional()
    @IsEnum(AppointmentStatus)
    status?: AppointmentStatus;

    @IsOptional()
    @IsBoolean()
    reprogrammed?: boolean;

    @IsOptional()
    @IsString()
    email3?: string;

    @IsOptional()
    @IsString()
    email24?: string;

    @IsOptional()
    @IsString()
    whats3?: string;

    @IsOptional()
    @IsString()
    whats24?: string;

    @IsOptional()
    @IsUUID()
    patientId?: string;

    @IsOptional()
    practitionerIds?: string[];
}
