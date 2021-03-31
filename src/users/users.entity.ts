import { JobApplication } from 'src/jobs/jobs.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryColumn({ type: 'uuid', generated: true, nullable: false })
  subid: string;

  @Column()
  phone: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  birthDate: string;

  @OneToMany(() => JobApplication, (job) => job.user)
  jobs: JobApplication[];
}
