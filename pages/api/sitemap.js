import db from "../../config/db";
import Blog from "../../models/blog"
import siteConfig from "../../siteConfig";


export default async function handler(
  req,
  res
) {
  try{
    await db();
    const blogs=await Blog.find({site:siteConfig.siteId},'-_id slug');
    res.send(blogs)
  }catch(err){
    res.status(500).json({message:err.message});
  }
}
