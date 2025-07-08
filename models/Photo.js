import mongoose, { Schema, models, model } from 'mongoose';

const PhotosSchema = new Schema({
  title: { type: String },
  slug: { type: String, required: true, unique: true },
  images: [{ type: String }],
}, {
  timestamps: true, // automatically manages createdAt and updatedAt
});

// Use existing model if already compiled, or create a new one
export const Photo = models.Photo || model('Photo', PhotosSchema);
