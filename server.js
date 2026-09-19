// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// // INFO: Create express app mern stack
// const app = express();
// const port = process.env.PORT;
// connectDB();
// connectCloudinary();

// // INFO: Middleware
// app.use(express.json());
// app.use(cors());

// // INFO: API endpoints
// app.use("/api/user", userRouter);
// app.use("/api/product", productRouter);
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)
// // INFO: Default route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // INFO: Start server
// app.listen(port, () =>
//   console.log(`Server is running on at http://localhost:${port}`)
// );

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

app.get("/", (req, res) => {
  res.send("API Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});