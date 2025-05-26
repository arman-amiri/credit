import { BaseEntity } from 'src/modules/base/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('error_log')
export class ErrorLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  method: string;

  @Column()
  url: string;

  @Column()
  status: number;

  @Column('nvarchar', { length: 'max' })
  message: string;

  @Column('nvarchar', { length: 'max' })
  stack: string;

  @Column('nvarchar', { length: 'max' })
  requestBody: string;

  @Column('nvarchar', { length: 'max' })
  requestQuery: string;

  @Column('nvarchar', { length: 'max' })
  requestParams: string;
}
