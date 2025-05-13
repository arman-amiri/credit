import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import handelError from 'src/utility/handel-error';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    try {
      // throw new Error('اطلاعات وارد شده صحیح نیست');
      throw new BadRequestException('کاربر یافت نشد');
      // return 'This action adds a new user';
    } catch (error: unknown) {
      handelError(error);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
