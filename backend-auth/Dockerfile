# 軽量版のNode.js 18を使用
FROM node:18-slim

# コンテナ内の作業ディレクトリ
WORKDIR /app

# まず設定ファイルをコピーしてライブラリをインストール
COPY package*.json ./
RUN npm install

# 残りのソースコードをコピー
COPY . .

# backend-authは5000番ポートを使用
EXPOSE 5000

# サーバー起動！
CMD ["npm", "start"]