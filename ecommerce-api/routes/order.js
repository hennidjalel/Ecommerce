const router = require("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Order = require("../models/Order");

// _______________ CREATE PRODUCT _______________

router.post("/", verifyToken, async (req, res)=>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save(req.body);
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json("error creating Order");
    }
})


// _______________ UPDATE Order _______________

router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const updatedOrder = await Cart.findByIdAndUpdate(req.params.id,
            {
                $set: req.body,
            },
            {
                new: true,
            });
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json("error updating Order");
    }
})


// _______________ DELETE ORDER _______________

router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted ...");
    }catch(err){
        res.status(500).json("error deleting Cart");
    }
})

// _______________ GET USER ORDER _______________

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json("error getting orders");
    }
})

// // _______________ GET ALL ORDER _______________

router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json("error getting orders");
    }
})

// STATS  GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async(req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() -1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1))

    try{
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    sales: { $sum: "$sales" },
                }    
            }    
        ]);
        res.status(200).json(income);
    }catch(err){
        res.status(500).json("error getting orders");
    }
})

module.exports = router;;Order