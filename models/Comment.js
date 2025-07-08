import mongoose, { Schema, models, model } from 'mongoose';

const CommentSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String},
    title:{type:String},
    contentpera:{type:String},
    maincomment:{type:Boolean},
    createdAt:{type:Date, default:Date.now},
    blog:{type:Schema.Types.ObjectId,ref:'Blog',required:true},
    parent:{type:Schema.Types.ObjectId,ref:'Comment'},// reference to parent comment
    children:{type:Schema.Types.ObjectId,ref:'Comment'},// Array of child comments
    parentName:{type:String}
 
}, {
  timestamps: true, // automatically manages createdAt and updatedAt
});

// Use existing model if already compiled, or create a new one
export const Comment = models.Comment || model('Comment', CommentSchema);
