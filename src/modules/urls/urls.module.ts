import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlEntity } from './entities/url.entity';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';

@Module({
  imports: [TypeOrmModule.forFeature([UrlEntity])],
  providers: [UrlsService],
  controllers: [UrlsController],
})
export class UrlsModule {}
