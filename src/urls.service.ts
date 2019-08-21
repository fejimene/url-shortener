import { Injectable } from '@nestjs/common';
import { Url } from './interfaces/url.interface';

@Injectable()
export class UrlShortenerService {
  private readonly urls: Url[] = [];

  create(url: Url) {
    this.urls.push(url);
  }

  findAll(): Url[] {
    return this.urls;
  }
}