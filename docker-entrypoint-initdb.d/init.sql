-- 1. ユーザー管理テーブル (backend-auth用)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    profile_image_path TEXT DEFAULT '/shared_storage/users/profiles/default.png',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. 動画管理テーブル (backend-video / worker-video用)
CREATE TABLE IF NOT EXISTS videos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    -- shared_storage内のパスを記録する
    raw_path TEXT NOT NULL,           -- 無加工動画の場所
    processed_path TEXT,              -- 加工後動画の場所
    thumbnail_path TEXT,              -- サムネイルの場所
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'processing', 'ready', 'error'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);