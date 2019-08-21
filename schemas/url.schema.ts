import * as mongoose from 'mongoose';

export const UrlSchema = new mongoose.Schema({
  hash: {
  	type:String,
  	required: true,
  },
  original: {
  	type:String,
  	required: true,
  },
  creationDate: {
  	type: mongoose.SchemaTypes.Date,
  	required: true,
  }
});