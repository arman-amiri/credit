import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConnection from './config/typeorm.connection';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.ENV}`,
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      inject: [ConfigService],
      useFactory: typeormConnection().useFactory,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
