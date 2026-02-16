const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // リクエストヘッダーからトークンを取り出す
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
        
        // ユーザー情報をリクエストに紐付ける
        req.userData = decoded;
        next(); // 問題なければ次の処理（動画投稿など）へ進む
    } catch (error) {
        return res.status(401).json({ message: "認証に失敗しました。ログインしてください。" });
    }
};