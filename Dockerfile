FROM node:18.16.1-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g npm@9.7.2

RUN npm install

COPY . .

EXPOSE $SERVER_PORT

RUN npx prisma generate
