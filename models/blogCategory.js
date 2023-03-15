const mongoose = require("mongoose");

const BlogCategorySchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    site: {type: mongoose.Schema.Types.ObjectId,ref:'Site', required: true},
    name: {type: String, required: true},
    slug: {type: String, required: true},
    status:{type:String,default:"active"}
}, {timestamps: true, collection: "blogcategory"})

const BlogCat = (mongoose.models && mongoose.models.BlogCat) ||
mongoose.model("BlogCat", BlogCategorySchema);
module.exports = BlogCat;