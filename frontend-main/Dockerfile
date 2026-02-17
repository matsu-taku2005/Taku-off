FROM node:18-slim

WORKDIR /app

# 依存関係をインストール
COPY package*.json ./
RUN npm install -g serve && npm install

# すべてのファイルをコピー（src/ や index.html を含む）
COPY . .

# 公開ポート
EXPOSE 3000

# 修正ポイント：publicフォルダではなく、カレントディレクトリ(.)を公開する
# 修正前: CMD ["serve", "-s", "."]
# 修正後: publicフォルダを公開の起点にする
CMD ["serve", "-s", "public"]