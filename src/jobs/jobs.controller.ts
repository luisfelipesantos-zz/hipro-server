import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { JobApplication } from './interfaces/job.interface';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Post()
  async create(@Body() createJobDto: CreateJobDto) {
    this.jobsService.createJob(createJobDto);
  }

  @Get()
  async findAll(): Promise<JobApplication[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async findJobById(@Param('id') id: string): Promise<JobApplication> {
    return this.jobsService.findOne(id);
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: string) {
    this.jobsService.delete(id);
  }
}
