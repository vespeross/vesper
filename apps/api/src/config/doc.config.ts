import { registerAs } from '@nestjs/config';

type DocConfig = {
  name: string;
  description: string;
  version: string;
  prefix: string;
};

export default registerAs(
  'doc',
  (): Required<DocConfig> => ({
    name: `${process.env.APP_NAME.toLocaleUpperCase()} APIs Specification`,
    description: `${process.env.APP_NAME} API description`,
    version: '1.0',
    prefix: '/docs',
  }),
);
