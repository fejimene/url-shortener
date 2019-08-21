import { Document } from 'mongoose';

export interface Url extends Document {
  readonly hash: string;
  readonly original: string;
  readonly creationDate: string;
}