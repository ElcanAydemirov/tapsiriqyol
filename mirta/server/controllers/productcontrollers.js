const productModel = require("../models/productmodel")

const getAll = async(req,res) => {
    try {
        const Products = await productModel.find({})
        if (Products) {
           return res.status(200).json({message:"succesfully",Products})
        }
        res.status(404).json({message:"notFound"})
        
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getById = async(req,res) => {
    const {id} = req.params
    try {
        const Product = await productModel.findById(id)
        if (Product) {
            return res.status(200).json({message:"succesfully",Product})
        }
        res.status(404).json({message:"notFound"})
        
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteById = async(req,res) => {
    const {id} = req.params
    try {
        const Product = await productModel.findByIdAndDelete(id)
        if (Product) {
            return res.status(200).json({message:"succesfully deleted",Product})
        }
        res.status(404).json({message:"notFound"})
        
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const editById = async(req,res) => {
    const {id} = req.params
    try {
        const Product = await productModel.findByIdAndUpdate(id,{...req.body},{new:true})
        if (Product) {
            return res.status(200).json({message:"succesfully updated",Product})
        }
        res.status(404).json({message:"notFound"})
        
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const post = async(req,res) => {
    try {
        const postedProduct = await productModel(req.body)
        postedProduct.save()
        if (postedProduct) {
            return res.status(200).json({message:"succesfully posted",postedProduct})
        }
        res.status(404).json({message:"notFound"})
        
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {getAll,getById,post,deleteById,editById}