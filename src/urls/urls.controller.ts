import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UrlShortenerService } from './urls.service';
import { Url } from './interfaces/url.interface';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlShortenerService) {}

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto) {
    this.urlsService.create(createUrlDto);
  }

  @Get()
  async findAll(): Promise<Url[]> {
    return this.urlsService.findAll();
  }
}