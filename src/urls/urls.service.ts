import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './interfaces/url.interface';

@Injectable()
export class UrlShortenerService {
  constructor(@Inject('URL_MODEL') private readonly urlModel: Model<Url>) {}

  async create(createUrlDto: CreateUrlDto): Promise<URL> {
    const createdUrl = new this.urlModel(createUrlDto);
    return await createdUrl.save();
  }

  async findAll(): Promise<Url[]> {
    return await this.urlModel.find().exec();
  }
}