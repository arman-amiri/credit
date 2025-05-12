import { BaseEntity } from "src/modules/base/base.entity";
import { Column } from "typeorm";

export class User extends BaseEntity {
    @Column({
        type: 'int',
        primary: true,
        generated: 'increment',
      })
      id: number;

      @Column({ length: 100, nullable: true })
      family: string;
    
      @Column({ length: 100, nullable: true })
      name: string;
}
