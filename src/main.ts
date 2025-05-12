import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const appPort = config.get<number>('APP_PORT') || 5000;

  await app.listen(process.env.PORT ?? appPort);
}
bootstrap();
