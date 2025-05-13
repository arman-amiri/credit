import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength, ValidateIf } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'علی', description: 'نام کاربر' })
  @IsString({ message: ' نام باید متن نوشتاری باشد' })
  @MaxLength(50, { message: 'نام باید حداکثر 100 حرف باشد' })
  @MinLength(3, { message: 'نام باید حداقل شامل ۳ حرف باشد' })
  // @ValidateIf((object, value) => value !== undefined)
  @Matches(/^[\u0600-\u06FFA-Za-z0-9._/,-\s\u200C]*$/, {
    message: 'مقادیر ورودی معتبر نیست',
  })
  readonly name: string;

  @ApiProperty({ example: 'رضایی', description: 'نام خانوادگی کاربر' })
  @IsString({ message: ' نام خانوادگی باید متن نوشتاری باشد' })
  @MaxLength(50, { message: 'نام خانوادگی باید حداکثر 50 حرف باشد' })
  @MinLength(3, { message: 'نام خانوادگی باید حداقل شامل ۳ حرف باشد' })
  // @ValidateIf((object, value) => value !== undefined)
  @Matches(/^[\u0600-\u06FFA-Za-z0-9._/,-\s\u200C]*$/, {
    message: 'مقادیر ورودی معتبر نیست',
  })
  readonly family: string;
}
