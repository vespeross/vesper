import { CreateDatabaseDto } from '../dtos';
import type { GetDatabaseResponse } from './database.response';

export type IDatabaseService = {
  createDatabase: (input: CreateDatabaseDto) => Promise<CreateDatabaseDto>;
  getDatabase: (cid: string | undefined) => Promise<GetDatabaseResponse>;
};
