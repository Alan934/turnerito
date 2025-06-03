import { IsOptional, IsString } from "class-validator";

export class CreateSocialWorkDto {
  @IsOptional() @IsString()
  name?: string;

  @IsOptional() @IsString()
  phone?: string;

  @IsOptional() @IsString()
  website?: string;
}
