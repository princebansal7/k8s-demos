import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let pool: pg.Pool;

try {
    pool = new pg.Pool({
        connectionString: process.env.DB_URL,
    });
    // Test the connection immediately
    pool.connect()
        .then(client => {
            client.release();
            console.log("Connected to the database successfully.");
        })
        .catch(err => {
            console.error("Failed to connect to the database:", err.message);
            process.exit(1); // Optional: exit if DB is critical
        });
} catch (err: any) {
    console.error("Error initializing database pool:", err.message);
    process.exit(1); // Optional: exit if DB is critical
}

app.get("/", async (req, res) => {
    res.send("<h1>Welcome to backend</h1><p>visit <b>/backend/users</b></p>");
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
