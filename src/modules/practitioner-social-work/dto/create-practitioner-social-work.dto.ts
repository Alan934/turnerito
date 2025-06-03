import { IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class CreatePractitionerSocialWorkDto {
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsUUID()
    practitionerId: string;

    @IsNotEmpty()
    @IsUUID()
    socialWorkId: string;
}
