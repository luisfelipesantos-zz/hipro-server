import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryColumn({ type: 'uuid', generated: true, nullable: false })
  subid: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  birthDate: string;
}
