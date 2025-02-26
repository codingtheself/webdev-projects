import express, { urlencoded } from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.status(200).json({
        message: 'I am the Back-End!',
        success: true
    });
});

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended: true}));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

app.use(cors(corsOptions));


app.listen(PORT, () => {
    console.log(`Server listening at localhost:${PORT}`);
});