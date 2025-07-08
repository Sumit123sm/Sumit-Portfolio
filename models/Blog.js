import mongoose, { Schema, models, model } from 'mongoose';

const BlogSchema = new Schema({
  title: { type: String },
  slug: { type: String, required: true, unique: true },
  images: [{ type: String }],
  description: { type: String },
  blogcategory: [{ type: String }],
  tags: [{ type: String }],
  status: { type: String, enum: ['draft', 'publish'], default: 'draft' },
  comments:[{type:Schema.Types.ObjectId, ref:'Comment'}]
}, {
  timestamps: true, // automatically manages createdAt and updatedAt
});

// Use existing model if already compiled, or create a new one
export const Blog = models.Blog || model('Blog', BlogSchema);
