import { Database, DatabaseUser } from '@prisma/client';

export type CreateDatabaseResponse = {
  database: Database;
};

export type CreateDatabaseUser = {
  databaseUser: DatabaseUser;
};

export type GetDatabasesResponse = {
  databases: Database | null | Database[];
};

export type GetDatabaseUserResponse = {
  databaseUsers: DatabaseUser[];
};
