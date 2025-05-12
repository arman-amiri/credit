import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default () => ({
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mssql',
      host: configService.get<string>('DB_HOST'),
      port: Number(configService.get<number>('DB_PORT')) || 5000,
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      entities: [join(__dirname, '../', '**/*.entity.{ts,js}')],
      logging: false, // ['query', 'error'],
      autoLoadEntities: true,
      synchronize:
        configService.get<string>('DB_ALLOW_SYNC_WITH_TYPEORM') === 'true',
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    };
  },
});
