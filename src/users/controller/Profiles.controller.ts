import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
import { CreateProfileDto } from 'src/typeorm/dtos/CreateProfile.dto';
  import { CreateUserDto } from 'src/typeorm/dtos/CreateUser.dto';
  import { UpdateUserDto } from 'src/typeorm/dtos/UpdateUser.dto';
import { ProfilesService } from '../services/Profile.service';
  import { UsersService } from '../services/users.service';
  
  @Controller('users')
  export class ProfilesController {
    constructor(private readonly service: ProfilesService) {}
  

  
    @Post(':id/profile')
    async createProfile(@Param('id', ParseIntPipe) id:number, @Body() createProfileDto: CreateProfileDto) {
      this.service.createProfile(id, createProfileDto);
    }
  
   
  }
  