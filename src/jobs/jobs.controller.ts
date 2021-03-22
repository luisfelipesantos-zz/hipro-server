import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { JobApplication } from './interfaces/job.interface';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Post()
  async create(@Body() createJobDto: CreateJobDto) {
    console.log(this.jobsService);
    this.jobsService.create(createJobDto);
  }

  @Get()
  async findAll(): Promise<JobApplication[]> {
    return this.jobsService.findAll();
  }
}
