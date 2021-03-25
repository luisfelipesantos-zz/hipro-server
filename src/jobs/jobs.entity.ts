import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('JobApplication')
export class JobApplication {
  @PrimaryColumn({ type: 'uuid', generated: true })
  id: string;

  @Column()
  company: string;

  @Column()
  role: string;

  @Column()
  status: string;
}
