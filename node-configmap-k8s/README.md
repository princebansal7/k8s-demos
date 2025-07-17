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
5. Use ConfigMap for `k8s` cluster

## k8s secret

-  To **encode** string in `base64`
   ```bash
   echo 'your-string' | base64
   ```
-  To **decode** string in `base64`
   ```bash
   echo 'your-base64-encoded-string' | base64 -d
   ```
*PS: Some versions of echo add a newline. Use echo -n if you want to avoid that*