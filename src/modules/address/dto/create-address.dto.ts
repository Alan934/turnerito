import { IsOptional, IsString } from "class-validator";

export class CreateAddressDto {
  @IsOptional() @IsString()
  street?: string;

  @IsOptional() @IsString()
  number?: string;

  @IsOptional() @IsString()
  city?: string;

  @IsOptional() @IsString()
  state?: string;

  @IsOptional() @IsString()
  country?: string;

  @IsOptional() @IsString()
  postalCode?: string;
}
