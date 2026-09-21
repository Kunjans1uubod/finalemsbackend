import express from "express";
import cors from "cors";
import "dotenv/config";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import adminRouter from "./routes/adminRoute.js";

// INFO: Create express app
const app = express();
const port = process.env.PORT || 4000;

const __dirname = dirname(fileURLToPath(import.meta.url));

connectCloudinary();

// INFO: Serve static admin panel
app.use(express.static(join(__dirname, "public")));

// INFO: Admin panel route
app.get("/admin", (req, res) => {
  res.sendFile(join(__dirname, "public", "admin.html"));
});

// INFO: Middleware
app.use(express.json());
app.use(cors({
  origin: [
    "https://finalprojectesm-dpsy-beige.vercel.app",
    "http://localhost:5173"
  ],
  credentials: true
}));

// INFO: API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/admin", adminRouter);

// INFO: Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// INFO: Start server
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);