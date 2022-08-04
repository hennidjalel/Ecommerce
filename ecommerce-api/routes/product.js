const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Product = require("../models/Product");

// _______________ CREATE PRODUCT _______________

router.post("/", verifyTokenAndAdmin, async (req, res)=>{
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save(req.body);
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json("error creating product");
    }
})


// _______________ UPDATE PRODUCT _______________

router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            });
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json("error updating product");
    }
})


// _______________ DELETE PRODUCT _______________

router.delete("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("product has been deleted ...");
    }catch(err){
        res.status(500).json("error deleting product");
    }
})

// _______________ GET PRODUCT _______________

router.get("/find/:id", async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json("error getting product");
    }
})

// _______________ GET ALL PRODUCT _______________

router.get("/", async (req, res)=>{
    const queryNew = req.query.new;
    const queryCategory = req.query.new;
    try{

        let products;
        if (queryNew){
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        }else if (queryCategory){
            products = await Product.find({
                categories: {
                    $in: [queryCategory],
                },
            });
        }else {
            products = await Product.find();
        }

        res.status(200).json(products);
    }catch(err){
        res.status(500).json("error getting users");
    }
})


module.exports = router;