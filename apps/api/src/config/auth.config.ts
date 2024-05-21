import { registerAs } from '@nestjs/config';

type AuthConfig = {
  accessToken: {
    secret: string;
    expirationTime: string;
  };
  refreshToken: {
    secret: string;
    expirationTime: string;
  };
};

export default registerAs(
  'auth',
  (): Required<AuthConfig> => ({
    accessToken: {
      secret: process.env.ACCESS_TOKEN_SECRET_KEY,
      expirationTime: '15m',
    },
    refreshToken: {
      secret: process.env.REFRESH_TOKEN_SECRET_KEY,
      expirationTime: '7d',
    },
  }),
);
