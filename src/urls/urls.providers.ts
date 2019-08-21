import { Connection } from 'mongoose';
import { UrlSchema } from './schemas/url.schema';

export const urlsProviders = [
  {
    provide: 'URL_MODEL',
    useFactory: (connection: Connection) => connection.model('Url', UrlSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];