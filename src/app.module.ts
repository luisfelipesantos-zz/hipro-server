import { Module } from '@nestjs/common';
import { JobsController } from './jobs/jobs.controller';
import { JobsModule } from './jobs/jobs.module';
import { JobsService } from './jobs/jobs.service';

@Module({
  imports: [JobsModule],
  controllers: [JobsController],
  providers: [JobsService],
})
export class AppModule {}
