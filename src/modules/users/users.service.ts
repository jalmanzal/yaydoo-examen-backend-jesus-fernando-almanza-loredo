import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities';
import { CreateUserDto, UpdateUserDto } from './dto';
import * as moment from 'moment';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    console.log(user);
    const newUser: User = await this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id: number): Promise<any> {
    const user: User = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    const calculateAge = (date: string) => {
      const bornDate = moment(date, 'DD/MM/YYYY');
      console.log(bornDate);
      const now = moment(Date.now());
      return now.diff(bornDate, 'years');
    };

    return { ...user, age: calculateAge(user.bornDate) };
  }

  async updateUser(
    id: number,
    { name, email, password, address, phone, bornDate }: UpdateUserDto,
  ): Promise<User> {
    const user: User = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    user.name = name;
    user.email = email;
    user.password = password;
    user.address = address;
    user.phone = phone;
    user.bornDate = bornDate;
    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    const user: User = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('User not found');
    await this.userRepository.remove(user);
  }
}
