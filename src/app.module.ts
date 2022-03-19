import { Module } from '@nestjs/common';
import { UrlsModule } from './modules/urls/urls.module';

@Module({
  imports: [UrlsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
