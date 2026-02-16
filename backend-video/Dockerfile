FROM node:18-slim

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# 依存関係のインストール（高速化のためpackage.jsonを先にコピー）
COPY package*.json ./
RUN npm install --production

# ソースコードをコピー
COPY . .

# backend-videoは5001番ポートを使用
EXPOSE 5001

CMD [ "node", "src/index.js" ]