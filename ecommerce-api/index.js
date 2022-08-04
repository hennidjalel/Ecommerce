const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");


dotenv.config();
// _____________connect to mongodb_____________

const app = express();
mongoose
    .connect(process.env.MONGO_URL).then(()=> console.log("DB Connected Successfully"))
    .catch((err) => {
        console.log(err);
    });

//_____________end of connect to mongodb_____________

// _____________ take a json object ______________
app.use(express.json());


app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);









app.listen(process.env.PORT || 5000, ()=>{
    console.log("the backend server is running!");
})