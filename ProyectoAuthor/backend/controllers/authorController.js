import Author from "../models/authorModel.js"

const createAuthor = async (req, res) =>{
    var authorData=req.body;
    var newAuthor = await Author.create(authorData);
    res.json(newAuthor);
}
const getAuthors = async(req, res) =>{
    var authorList= await Author.find();
    res.json(authorList);
}
const getOneAuthors = async (req, res) =>{
    var id = req.params.idAuthor;
    var authorFound = await Author.findById(id);
    res.json( authorFound);
}
const deleteAuthors = async (req, res) =>{
    var id = req.params.idAuthor;
   await Author.findByIdAndDelete(id);
   res.status(200).json();
}
const putAuthors = async(req, res) =>{
    var id= req.params.idAuthor;
    var data = req.body;
    await Author.findByIdAndUpdate(id, data)
    res.status(200).json();
}
export { createAuthor, getAuthors, getOneAuthors, deleteAuthors, putAuthors }