import { Module } from '@nestjs/common';
import { ErrorLog } from './entities/error-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorLogService } from './error-log.service';

@Module({
  imports : [TypeOrmModule.forFeature([ErrorLog]),],
  controllers: [],
  providers: [ErrorLogService],
})
export class ErrorLogModule {}
