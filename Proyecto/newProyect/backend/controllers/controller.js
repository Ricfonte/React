import New from"../models/model.js";

const createNew = async(req, res) =>{
    var NewData = req.body;
    var newNew = await New.create (NewData)
    res.json(newNew)
}

const getNew = async (req, res) =>{
    var NewList = await New.find();
    res.json(NewList)
}

const getOneNew = async (req, res) => {
    var id = req.params.idpet;
   var newFound = await New.findById(id)
    
    res.json(newFound)
}

const deleteNew = async (req, res) =>{
    var id = req.params.idpet;
    await New.findByIdAndDelete(id)
    res.status(200).json();
}

const updateNew = async (req, res) =>{
    var id = req.params.idpet;
    var data = req.body;
    await New.findByIdAndUpdate(id, data)
    res.status(200).json();
}

export {createNew, getNew , getOneNew, deleteNew, updateNew}

