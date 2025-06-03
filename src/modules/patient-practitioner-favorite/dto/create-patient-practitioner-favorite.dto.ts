import { IsNotEmpty, IsUUID } from "class-validator";

export class CreatePatientPractitionerFavoriteDto {
    @IsNotEmpty()
    @IsUUID()
    patientId: string;

    @IsNotEmpty()
    @IsUUID()
    practitionerId: string;
}
