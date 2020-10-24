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
      specialization: { type: String, required: true },
      age: { type: Number, max: 30 },
      gender: { type: String, enum: ['male', 'female'], default: 'male' },
      about: { type: String, required: true },
      degree: { type: String },
      hasGraduated: { type: Boolean, default: false },
      salaryFrom: { type: String },
      salaryTo: { type: String },
      contactInfo: { type: String, required: true },
      skills: { type: [String], default: [] },
      residence: { type: String },
      hasExperience: { type: Boolean, defualt: false },
      experienceInfo: { type: String },
      languages: { type: [String], default: [] },
      achievements: { type: [String], defualt: [] },
      score: { type: Number, default: 0 },
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
