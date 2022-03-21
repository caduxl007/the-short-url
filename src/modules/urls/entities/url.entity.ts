import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({
  name: 'urls',
})
export class UrlEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  short_url: string;

  @Column({ nullable: false })
  origin_url: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(url?: Partial<UrlEntity>) {
    this.id = url?.id;
    this.origin_url = url?.origin_url;
    this.short_url = url?.short_url;
    this.created_at = url?.created_at;
  }
}
