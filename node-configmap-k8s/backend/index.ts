import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

console.log(process.env.DB_URL);
console.log(process.env.PORT);

app.get("/", (req: any, res: any) => {
    res.json({
        sample_db_url: process.env.DB_URL,
        port: process.env.PORT,
    });
});

app.listen(process.env.PORT || 3000);
