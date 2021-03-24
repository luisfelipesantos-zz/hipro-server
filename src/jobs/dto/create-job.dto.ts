import { IsDefined, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  status: string;
}
