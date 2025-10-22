import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = new pg.Pool({
    connectionString: process.env.DB_URL, // postgres://postgres:<password>@<service-name>.<namespace-in-which-db-service-running>.svc.cluster.local:<service-port>/postgres
});

app.get("/users", async (req, res) => {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
});

app.post("/users", async (req, res) => {
    const result = await pool.query(
        "INSERT INTO users (name) VALUES ($1) RETURNING *",
        [req.body.name]
    );
    res.json(result.rows[0]);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// as when pods starts, initially there will be no database, so we are initializing that

async function initDb() {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )`);
}

initDb();
