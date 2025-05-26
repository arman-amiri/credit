import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorLogService } from 'src/modules/error-log/error-log.service';
//   import { LoggerService } from '../logger/logger.service';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  // LoggerService را به طور خودکار از NestJS دریافت می‌کنیم
  constructor(private readonly errorLogService: ErrorLogService) {}

   catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : exception instanceof Error
          ? exception.message // اگر خطا از نوع Error باشه
          : 'Internal server error';
    console.log(message, 'message');
    const stack = exception instanceof Error ? exception.stack : null;

    this.errorLogService.create({
      method: req.method,
      url: req.url,
      status,
      message: typeof message === 'string' ? message : JSON.stringify(message),
      stack,
      requestBody: JSON.stringify(req.body),
      requestQuery: JSON.stringify(req.query),
      requestParams: JSON.stringify(req.params),
    });

    res.status(status).json({
      statusCode: status,
      message:
        typeof message === 'string' ? message : (message as Error).message,
      //   path: req.url,
      timestamp: new Date().toISOString(),
    });
  }
}
