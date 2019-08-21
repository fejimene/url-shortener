import { Module } from '@nestjs/common';
import { UrlsController } from './urls.controller';
import { UrlShortenerService } from './urls.service';
import { urlsProviders } from './urls.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UrlsController],
  providers: [UrlShortenerService, ...urlsProviders],
})
export class UrlsModule {}