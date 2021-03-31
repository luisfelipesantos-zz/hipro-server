import { User } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

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

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, (user) => user.jobs)
  @JoinColumn({ name: 'userId' })
  user: User;
}
