import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { merge } from 'lodash';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSyncDto } from './dto/user-sync.dto';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    const newUser = await this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return newUser;
  }

  userSync(user: UserSyncDto): void {
    const userFind = this.userRepository.findOne({
      where: { subid: user.subid },
    });

    if (!userFind) {
      try {
        this.userRepository.insert(user);
      } catch (error) {
        throw new Error('User register failed');
      }
    } else {
      try {
        this.userRepository.save(merge(userFind, user));
      } catch (error) {
        throw new Error('User attributes sync failed');
      }
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  update(id: string, updatedUser: UpdateUserDto) {
    return this.userRepository.update(id, updatedUser);
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }
}
