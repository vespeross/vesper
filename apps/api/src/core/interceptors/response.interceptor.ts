import { statusMessages } from '@/app/app.constants';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { firstValueFrom, of } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  public constructor(private readonly reflector: Reflector) {}

  public async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<any> {
    const body = await firstValueFrom(next.handle());
    const status =
      this.reflector.get<number>('__httpCode__', context.getHandler()) || 200;
    return of({
      statusCode: status,
      message: statusMessages[status],
      body,
    });
  }
}
