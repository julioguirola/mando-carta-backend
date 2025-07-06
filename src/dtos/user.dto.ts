import { IsString, Length } from 'class-validator';

export class UserDto {
  @IsString({ message: 'Username is required' })
  @Length(4, 20, { message: 'Username must be between 4 and 20 characters' })
  username: string;

  @IsString({ message: 'Password is required' })
  @Length(8, 8, { message: 'Password must be 8 characters' })
  password: string;
}
