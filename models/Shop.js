import { Schema, models, model } from 'mongoose';

const ProductSchema = new Schema({
  title: { type: String },
  slug: { type: String, required: true, unique: true },
  images: [{ type: String }],
  description: { type: String },
  tags: [{ type: String }],
  afilink: [{ type: String }],
  price: [{ type: String }],// you can change this to Number if you want to store prices as numbers
  status: { type: String },
}, {
  timestamps: true, // automatically manages createdAt and updatedAt
});

// Use existing model if already compiled, or create a new one
export const Shop = models.Shop || model('Shop', ProductSchema);
