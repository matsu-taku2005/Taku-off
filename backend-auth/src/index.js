const express = require('express');
const app = express();
app.use(express.json());

// 動作確認用のルート
app.get('/auth/health', (req, res) => {
    res.json({ status: "Auth Service is running" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Auth server running on port ${PORT}`));