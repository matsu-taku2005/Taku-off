FROM node:18-slim

# FFmpegをインストール
RUN apt-get update && apt-get install -y ffmpeg && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# workerは外部からのリクエストを待つのではなく、自分からファイルを監視しに行きます
CMD [ "node", "src/index.js" ]