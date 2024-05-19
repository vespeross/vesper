import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HelperHashService {
  public createHash(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  public match(hash: string, password: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
