import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileParams, CreateUserParams, UpdateUserParams } from 'src/typeorm/types/Utils';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(User) private userRepository: Repository<User>,
      ) {} 

 async createProfile(id:number, ProfileDetails: CreateProfileParams) {
    const user = await this.userRepository.findOneBy({id});
    if(!user)
    throw new Error('user not found')

  const newProfile = this.profileRepository.create(ProfileDetails);

  const saveProfile= await this.profileRepository.save(newProfile);

  user.profile = saveProfile;
  return this.userRepository.save(user)
}; 

  



  
}
