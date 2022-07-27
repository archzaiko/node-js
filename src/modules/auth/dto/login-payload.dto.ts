import { IsString } from 'class-validator';

export class LoginPayload {

  @IsString()
    username: string;

  @IsString()
    password: string;

  constructor({ username, password }: { username: string; password: string }) {
    this.username = username;
    this.password = password;
  }
}
