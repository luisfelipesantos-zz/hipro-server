import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { JobApplication } from './src/jobs/jobs.entity';
import { User } from './src/users/users.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [JobApplication, User],
  migrations: ['src/migrations/*{.ts,.js}'],
  migrationsRun: true,
};
