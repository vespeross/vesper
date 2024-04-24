import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

import { AppModule } from './app/app.module';
import { setupSwagger } from './swagger';

export const logger = new Logger('API Service');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const configService = app.get(ConfigService);
  const port: number = configService.get<number>('app.http.port');
  const host: string = configService.get<string>('app.http.host');
  const globalPrefix: string = configService.get<string>('app.globalPrefix');
  const versioningPrefix: string = configService.get<string>(
    'app.versioning.prefix',
  );
  const version: string = configService.get<string>('app.versioning.version');
  const versionEnable: string = configService.get<string>(
    'app.versioning.enable',
  );
  app.use(helmet());
  app.getHttpAdapter().getInstance().set('json spaces', 4);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(globalPrefix);
  if (versionEnable) {
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: version,
      prefix: versioningPrefix,
    });
  }
  setupSwagger(app);
  await app.listen(port, () => {
    logger.log(
      `🚀 ${configService.get<string>('app.name').toLocaleUpperCase()} is running on ${host}:${port}`,
    );
  });
}
bootstrap();
