import express from "express";

const app = express();
const LARGE_NUM = 100000000000;

app.get("/", (req, res) => {
    res.send(
        "<h1>Hello to CPU intensive node Backend</h1><p>visit <b>/cpu</b> for CPU intensive endpoint</p>"
    );
});

app.get("/cpu", (req, res) => {
    let cnt = 0;
    for (let i = 0; i < LARGE_NUM; i++) {
        cnt += 1;
    }
    res.send("<h1>CPU Intensive point.</h1>");
});

app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
});
