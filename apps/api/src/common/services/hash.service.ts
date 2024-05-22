import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HelperHashService {
  public salt: string;
  constructor() {
    this.salt = bcrypt.genSaltSync();
  }

  public async createHash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.salt);
  }

  public async match(hash: string, password: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
