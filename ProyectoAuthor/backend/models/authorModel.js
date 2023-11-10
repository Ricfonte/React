import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    name: String,
  
    
})

const Author = mongoose.model("authors", AuthorSchema);
export default Author;