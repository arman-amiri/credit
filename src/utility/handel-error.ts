import { HttpException } from '@nestjs/common';

export default function handelError(error: unknown) {
  if (error instanceof HttpException) throw error;

  throw new Error('خطا در عملیات');
}
