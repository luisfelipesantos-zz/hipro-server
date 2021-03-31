import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateJobDto {
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

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  userId: string;
}
