import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "/app/secret/.env" });

const app = express();

console.log(process.env.DB_URL); // coming from config map manifest
console.log(process.env.PORT); // coming from config map manifest
console.log(process.env.USERNAME); // coming from secret manifest
console.log(process.env.PASSWORD); // coming from secret manifest

app.get("/", (req: any, res: any) => {
    res.json({
        sample_db_url: process.env.DB_URL,
        port: process.env.PORT,
    });
});

app.listen(process.env.PORT || 3000);
