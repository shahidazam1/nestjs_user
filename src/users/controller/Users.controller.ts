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
import { CreateUserDto } from 'src/typeorm/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/typeorm/dtos/UpdateUser.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  async getUsers() {
    const data = await this.service.allUsers();
    return data;
  }

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.userById(id);
    return data;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const value = await this.service.createUser(createUserDto);
    return value;
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateUserDto: UpdateUserDto,
  ) {
    const res = await this.service.updateUser(id, UpdateUserDto);
    return res;
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.service.deleteUser(id);
  }
}
