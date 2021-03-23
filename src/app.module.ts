import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { JobApplication } from './jobs/jobs.entity';
import dotenv = require('dotenv');
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [JobApplication, User],
      synchronize: true,
    }),
    JobsModule,
    UsersModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
