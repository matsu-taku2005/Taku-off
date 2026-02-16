FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# 開発用の一時的なコマンド
CMD ["npx", "serve", "-s", "public", "-p", "3000"]