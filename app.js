import express from "express"; 
import { dbconnection } from "./database/dbconnection.js";
import messageRouter from "./router/messageRouter.js";
import dotenv from "dotenv"; // ✅ Add a space after "dotenv" for consistency
import cors from "cors";

const app = express();

// ✅ Load environment variables correctly
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials:true,
    
}));

app.use(express.json()); // ✅ Middleware for JSON requests
app.use(express.urlencoded({ extended: true })); // ✅ Middleware for form data

app.get("/",(req, res)=>{
    res.json({
        sucess: true,
        message:"simran is cute",
    });
});

// ✅ Correct router path
app.use("/api/v1/message", messageRouter);

// ✅ Connect to the database
dbconnection();

export default app; // ✅ Correctly export the app
