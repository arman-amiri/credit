// import { Exclude } from 'class-transformer';
import { Column } from 'typeorm';
import { Exclude } from 'class-transformer';

// just for SQL Server
const tehranNowSql = () =>
  "SWITCHOFFSET(SYSDATETIMEOFFSET(), DATEPART(TZOFFSET, SYSDATETIMEOFFSET() AT TIME ZONE 'Iran Standard Time'))";

export class BaseEntity {
  @Column({
    name: 'createdAt',
    type: 'datetime2', // Use datetime2 instead of datetime
    precision: 0, // Reduced precision to save storage (datetime2(0) takes 6 bytes)
    select: false,
    default: () => tehranNowSql(),
  })
  createdAt: Date;

  @Column({
    name: 'updatedAt',
    type: 'datetime2', // Use datetime2 instead of datetime
    precision: 0, // Reduced precision to save storage (datetime2(0) takes 6 bytes)
    select: false,
    default: () => tehranNowSql(),
    onUpdate: tehranNowSql(),
  })
  @Exclude({ toPlainOnly: true })
  updatedAt: Date;

  @Column({
    name: 'deletedAt',
    type: 'datetime2', // Use datetime2 instead of datetime
    precision: 0, // Reduced precision to save storage (datetime2(0) takes 6 bytes)
    select: false,
    nullable: true,
  })
  @Exclude({ toPlainOnly: true })
  deletedAt: Date;
}
