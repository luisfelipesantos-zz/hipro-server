import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/users/users.guard';
import { CreateJobDto } from './dto/create-job.dto';
import { updatedJobDto } from './dto/update-job.dto';
import { JobApplication } from './interfaces/job.interface';
import { JobsService } from './jobs.service';

@UseGuards(AuthGuard)
@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Post()
  async create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.createJob(createJobDto);
  }

  @Get()
  async findAll(): Promise<JobApplication[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async findJobById(@Param('id') id: string): Promise<JobApplication> {
    return this.jobsService.findOne(id);
  }

  @Put(':id')
  async updateJob(@Param('id') id: string, @Body() updatedJob: updatedJobDto) {
    return this.jobsService.update(id, updatedJob);
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: string) {
    return this.jobsService.delete(id);
  }
}
