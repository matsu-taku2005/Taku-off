// これはSQLのイメージです。init.sqlに書く内容と連動します。
/*
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_verified BOOLEAN DEFAULT false, -- 本人確認済みか
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/