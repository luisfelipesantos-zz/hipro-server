import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class JobApplication {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  company: string;

  @Column()
  role: string;

  @Column()
  status: string;
}
