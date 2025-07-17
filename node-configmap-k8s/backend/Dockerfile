FROM oven/bun:latest

WORKDIR /app

COPY *json .

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "index.ts"]