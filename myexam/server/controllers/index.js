const modelGood = require('../models/index')

const getAllGoods = async(req, res)=>{
    try {
        const goods = await modelGood.find()
        res.status(200).json(goods)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
const getGoodById = async(req, res)=>{
    const id = req.params.id
    try {
        const good = await modelGood.findById(id)
        res.status(200).json(good)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const deleteGood = async(req, res)=>{
    const id = req.params.id
    try {
        const deleted = await modelGood.findByIdAndDelete(id)
        res.status(200).json({message: "deleted succesfully", deleted: deleted})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const postGood = async(req, res)=>{
    try {
        const newGood = modelGood({...req.body})
        await newGood.save()
        res.status(200).json({message: "added succesfully!", newData: newGood})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = {
    getAllGoods,
    getGoodById,
    deleteGood,
    postGood
}