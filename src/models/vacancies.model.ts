// vacancies-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'vacancies';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      specialization: { type: String, required: true },
      description: { type: String, required: true },
      companyName: { type: String, required: true },
      occupationType: {
        type: String,
        required: true,
        enum: ['full', 'part', 'project', 'intern'],
      },
      skills: { type: [String], required: true },
      contactInfo: { type: String, required: true },
      salaryFrom: { type: String },
      salaryTo: { type: String },
      jobLocation: { type: String },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
