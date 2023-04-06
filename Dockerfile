FROM node:16.11-alpine AS builder

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD ["sh", "deploy.sh"]
