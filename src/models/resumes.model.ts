// resumes-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'resumes';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phone: { type: String, required: true, unique: true },
      residence: { type: String },
      age: { type: { day: { type: String }, month: { type: String }, year: { type: String } } },
      gender: { type: String, enum: ['male', 'female', 'no'], default: 'male' },
      haveExperience: { type: Boolean, required: true },
      wantJob: { type: String, required: true },
      wantSalary: { type: Number },
      previousExperience: { type: String },
      skills: { type: [String], default: [] },
      languages: { type: [String], default: [] },
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
