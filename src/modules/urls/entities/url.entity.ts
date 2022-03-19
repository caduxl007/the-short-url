import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({
  name: 'urls',
})
export class UrlEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  short_url: string;

  @Column({ nullable: false })
  origin_url: string;

  @CreateDateColumn()
  created_at: Date;
}
