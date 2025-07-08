import { Schema, models, model } from 'mongoose';

const projectSchema = new Schema({
  title: { type: String },
  slug: { type: String, required: true, unique: true },
  images: [{ type: String }],
  description: { type: String },
  client: { type: String },
  projectcategory: [{ type: String }],
  tags: [{ type: String }],
  livepreview: { type: String },
  status: { type: String },
}, {
  timestamps: true, // automatically manages createdAt and updatedAt
});

// Use existing model if already compiled, or create a new one
export const Project = models.Project || model('Project', projectSchema);
