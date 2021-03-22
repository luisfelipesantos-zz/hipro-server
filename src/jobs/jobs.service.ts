import { Injectable } from '@nestjs/common';
import { JobApplication } from './interfaces/job.interface';

@Injectable()
export class JobsService {
  private readonly jobs: JobApplication[] = [];

  create(job: JobApplication) {
    this.jobs.push(job);
  }

  findAll(): JobApplication[] {
    return this.jobs;
  }
}
