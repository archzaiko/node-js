import { Strategy } from 'passport-local';
import { pbkdf2, timingSafeEqual } from 'crypto';

import { User } from 'src/modules/user';
import { UserService } from 'src/modules/user/user.service';
import { environment } from 'src/environment';


export class LocalStrategy extends Strategy {
  private userService = new UserService();

  constructor() {
    super(async (username: string, password: string, done) => {
      try {
        const user = await this.verify(username, password);
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        done(err);
      }
    });
  }

  async verify(username: string, password: string): Promise<User | undefined> {
    const user = this.userService.findOneByName(username);
    return user;
  }

  private async verifyPassword(user: User, password: string): Promise<boolean> {
    const salt = environment.auth.salt;
    return new Promise((resolve, reject) => {
      pbkdf2(password, salt, 310000, 32, 'sha256', (err, hashedPassword) => {
        if (err) {
          reject(err); 
        }
        resolve(timingSafeEqual(Buffer.from(user.password), hashedPassword));
      });
    });
  }
}
