import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplication } from './jobs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobApplication])],
  providers: [JobsService],
  controllers: [JobsController],
})
export class JobsModule {}
