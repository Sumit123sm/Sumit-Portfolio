import mongoose, { Schema, models, model } from 'mongoose';

const ContactSchema = new Schema({
  name: { type: String,required:true },
  lname: { type: String },
  email: { type: String,required:true },
  company: { type: String },
  phone: { type: String,required:true },
  country: { type: String },
  price: { type: String, },
  description: { type: String },
  project: [{type: String}],
 
}, {
  timestamps: true, // automatically manages createdAt and updatedAt
});

// Use existing model if already compiled, or create a new one
export const Contact = models.Contact || model('Contact', ContactSchema);
