const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Product = require("../models/Cart");

// _______________ CREATE CART _______________

router.post("/", verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save(req.body);
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json("error creating cart");
    }
})


// _______________ UPDATE CART _______________

router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            });
        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json("error updating Cart");
    }
})


// _______________ DELETE CART _______________

router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted ...");
    }catch(err){
        res.status(500).json("error deleting Cart");
    }
})

// _______________ GET USER CART _______________

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json("error getting cart");
    }
})

// // _______________ GET ALL CART _______________

router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json("error getting cart");
    }
})


module.exports = router;;