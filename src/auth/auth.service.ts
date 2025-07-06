import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from 'src/dtos/user.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async register(userDto: UserDto) {
    return await this.userModel.create({
      username: userDto.username,
      password: userDto.password,
    });
  }
}
