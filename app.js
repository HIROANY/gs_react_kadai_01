import express from "express";
// 追加 おみくじのルーティングを読み込む
import { omikujiRouter } from "./routes/omikuji.route.js";

// 追加 じゃんけんのルーティングを読み込む
import { jankenRouter } from "./routes/janken.route.js";

// 追加 ラッキーカラーのルーティングを読み込む
import { luckycolorRouter } from "./routes/luckycolor.route.js";

const app = express();
// Postでデータを受け取るために記載
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
  res.json({
    uri: "/",
    message: "Hello Node.js!",
  });
});

// 追加 おみくじのルーティングを変更
app.use("/omikuji", (req, res) => omikujiRouter(req, res));

// 追加 じゃんけんのルーティング変更
app.use("/janken", (req, res) => jankenRouter(req, res));

// 追加 ラッキーカラーのルーティング変更
app.use("/luckycolor", (req, res) => luckycolorRouter(req, res));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



