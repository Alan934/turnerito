import { IsNotEmpty, IsUUID } from "class-validator";

export class CreatePatientAppointmentDto {
    @IsNotEmpty()
    @IsUUID()
    appointmentId: string;
}
