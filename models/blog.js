import mongoose from 'mongoose'
import BlogCat from './blogCategory'

const blogSchema = mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    site: { type: mongoose.Schema.Types.ObjectId, ref: 'Site', required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String },
    author: { type: String },
    featured_image: { type: String },
    meta_title: { type: String },
    meta_description: { type: String },
    meta_keywords: { type: String },
    tags: { type: Array },
    cat: [
      { type: mongoose.Schema.Types.ObjectId, ref: BlogCat, required: true },
    ],
    status: { type: String, default: 'active' },
  },
  { timestamps: true, collection: 'blogs' }
)

const Blog =
  (mongoose.models && mongoose.models.Blog) ||
  mongoose.model('Blog', blogSchema)

module.exports = Blog
