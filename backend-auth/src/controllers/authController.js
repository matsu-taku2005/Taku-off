const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 本来はDBからユーザーを探す処理が入ります（今はシミュレーション）
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        // パスワードを暗号化（ハッシュ化）
        const hashedPassword = await bcrypt.hash(password, 10);
        
        console.log(`User ${email} registered with hash: ${hashedPassword}`);
        res.status(201).json({ message: "ユーザー登録が完了しました" });
    } catch (err) {
        res.status(500).json({ error: "登録に失敗しました" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    // 1. DBからユーザーを探す
    // 2. パスワードを照合する
    // 3. OKならトークン（通行証）を発行する
    const token = jwt.sign({ userId: 123 }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1h' });
    
    res.json({ message: "ログイン成功！", token });
};