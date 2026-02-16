const express = require('express');
const router = express.Router();

// Taku-off 新規登録
router.post('/register', (req, res) => {
    const { email, password } = req.body;
    
    // 仮のレスポンス（あとでデータベース接続を追加します）
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    console.log(`New user: ${email}`);
    res.status(201).json({ 
        message: "Taku-off: User registered successfully!",
        user: { email }
    });
});

// Taku-off ログイン
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // ログインロジックをここに書く
    res.json({ message: "Login successful" });
});

module.exports = router;