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
  async create(createErrorLogDto: {
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

    // await this.errorLogRepository.create({
    //   message: createErrorLogDto.message,
    // });
    return 'This action adds a new errorLog';
  }
}
