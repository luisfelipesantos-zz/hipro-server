import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { JobApplication } from './jobs.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobApplication)
    private jobsRepository: Repository<JobApplication>,
  ) {}

  async createJob(job: CreateJobDto) {
    const newJob = await this.jobsRepository.create(job);
    await this.jobsRepository.save(newJob);
    return newJob;
  }

  findAll(): Promise<JobApplication[]> {
    return this.jobsRepository.find();
  }

  findOne(id: string): Promise<JobApplication> {
    return this.jobsRepository.findOne(id);
  }

  delete(id: string) {
    this.jobsRepository.delete(id);
  }
}
