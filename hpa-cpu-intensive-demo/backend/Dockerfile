FROM node:slim

WORKDIR /app

COPY *json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]