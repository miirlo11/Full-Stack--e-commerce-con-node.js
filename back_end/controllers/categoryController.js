const Category = require('../models/category');

module.exports = {
    async getAllCategories(req, res) {
        try {
            const categories = await Category.find().populate('category');
            res.status(200).json(categories);
        } catch{error} {
            res.status(500).json({message: err.message});
        }
    },
    async createCategory (req, res) {
        const category = new Category ({
            name: req.body.name,
        });
        try{
            const newCategory = await category.save();
            res.status(201).json(newCategory);
        } catch{err}{
            res.status(400).json({message: err.message});
        }
    },
};