## Ways to pass environment variables

1. Within commands (imperative)
    ```bash
    PORT=3001 DB_URL=postgres://postgres:pass123@localhost:5432 bun run index.ts
    ```
2. Within Terminal session
    ```bash
    export PORT=3001 
    export DB_URL=postgres://postgres:pass123@localhost:5432 bun run index.ts
    bun run index.ts
    ```
3. Using `.env` file (ideally shouldn't be baked into image)
4. Using docker command:
    ```bash
    docker run -e PORT=3008 -e DB_URL=<your-db-url> -p 3000:3008 princebansal7/node-be-env:v1
    ```
   
