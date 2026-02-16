const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// shared_storageを保存先に指定
const storage = multer.diskStorage({
    destination: '/app/shared_storage/youtube_clone/raw_videos',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// 動画アップロードAPI
router.post('/upload', upload.single('video'), (req, res) => {
    // 1. ファイルを受け取る
    // 2. DB（Postgres）に「未加工(pending)」状態でメタデータを保存
    // 3. worker-videoがこれを検知して処理を開始する
    res.status(202).json({ message: "Video uploaded. Processing started..." });
});

module.exports = router;