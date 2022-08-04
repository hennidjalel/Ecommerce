const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// ___________ REGISTER ___________

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASS).toString(),
    });

    try{
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});



// ___________ LOGIN ___________

router.post("/login", async (req, res)=>{

    try{
        const user = await User.findOne({username: req.body.username});
        if (!user)  {
            res.status(401).json("user not found");
            return;
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.SECRET_PASS
            );
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        Originalpassword !== req.body.password && res.status(401).json("password is incorrect");
        
        // ___________ create a token ___________    
        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET, {expiresIn: "3d"}); //expires in 3 days
        // ___________ end of create a token ___________
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;