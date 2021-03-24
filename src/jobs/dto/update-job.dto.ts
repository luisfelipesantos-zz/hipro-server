import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class updatedJobDto {
  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  company?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  role?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  status?: string;
}
