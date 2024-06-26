export type User = {
  email: string;
};

export type Project = {
  cid: string;
  name: string;
  description: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type Invite = {
  accepted: boolean;
  cid: string;
  code: string;
  createdAt: string;
  email: string;
  updatedAt: string;
};
