import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorLog } from './entities/error-log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ErrorLogService {
  constructor(
    @InjectRepository(ErrorLog)
    private readonly errorLogRepository: Repository<ErrorLog>,
  ) {}
   create(createErrorLogDto: {
    method: string;
    url: string;
    status: number;
    message: string;
    stack: string | null | undefined;
    requestBody: string;
    requestQuery: string;
    requestParams: string;
  }) {
    console.log(createErrorLogDto, 'createErrorLogDto');
    const {
      message,
      method,
      requestBody,
      requestParams,
      requestQuery,
      stack,
      status,
      url,
    } = createErrorLogDto;
    const log = this.errorLogRepository.create({
      method,
      url,
      status,
      message,
      stack: stack ? stack : '',
      requestBody,
      requestQuery,
      requestParams,
    });

    this.errorLogRepository.save(log);
    return 'This action adds a new errorLog';
  }
}
