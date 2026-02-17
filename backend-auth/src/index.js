const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// データベース接続設定 (.envから読み込まれる)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 動作確認用のテストルート
app.get('/health', (req, res) => {
  res.json({ status: "Taku-off Auth Service is running!" });
});

// データベース接続テスト
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: "Database connected!", time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Database connection failed", detail: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Auth service listening on port ${PORT}`);
});