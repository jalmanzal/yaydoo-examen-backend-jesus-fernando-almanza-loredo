import { IsObject, IsString } from 'class-validator';
import { User } from '../entities';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly bornDate: string;
}
