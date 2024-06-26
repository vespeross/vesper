import { Invite } from "@/types";

export type CreateInvitePayload = {
  email: string;
};

export type InviteSliceState = {
  invites: Invite[];
};

export type CreateInviteResponse = {
  body: {
    email: string;
    inviteLink: string;
  };
};

export type GetInvitesResponse = {
  body: {
    invites: Invite[];
  };
};
