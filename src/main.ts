import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './config/swagger.config';
import { ErrorLogService } from './modules/error-log/error-log.service';
import { GlobalExceptionFilter } from './filters/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const appPort = config.get<number>('APP_PORT') || 5000;

  setupSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const errorLogService = app.get(ErrorLogService);
  app.useGlobalFilters(new GlobalExceptionFilter(errorLogService));

  await app.listen(process.env.PORT ?? appPort);
}
bootstrap();
