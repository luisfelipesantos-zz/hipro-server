import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  subid?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  password?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  birthDate?: string;
}
