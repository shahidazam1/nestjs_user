import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from 'src/typeorm/types/Utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  allUsers() {
    return this.userRepository.find();
  }

  userById(id: number) {
    return this.userRepository.findOneBy({
      id,
    });
  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  updateUser(id: number, UpdateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...UpdateUserDetails });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
