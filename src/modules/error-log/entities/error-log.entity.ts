import { BaseEntity } from 'src/modules/base/base.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
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
  
    @Column('text')
    message: string;
  
    @Column('text', { nullable: true })
    stack: string;
  
    @Column('text', { nullable: true })
    requestBody: string;
  
    @Column('text', { nullable: true })
    requestQuery: string;
  
    @Column('text', { nullable: true })
    requestParams: string;
  }