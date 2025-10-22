# Ephemeral Volumes

- It is temporary volume that can be shared amongst various containers of a pod, when pod dies, data is also lost with it.
- Examples: ConfigMaps, Secrets and emptyDir (read only)

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
5. Use **ConfigMap** for `k8s` cluster. [Link](https://github.com/princebansal7/k8s-demos/blob/main/04.node-configmap-secrets-k8s/ops/configmap.yml)

## k8s secret

- k8s `secrets` | [Link](https://github.com/princebansal7/k8s-demos/blob/main/04.node-configmap-secrets-k8s/ops/secrets.yml)
-  To **encode** string in `base64`
   ```bash
   echo 'your-string' | base64
   ```
-  To **decode** string in `base64`
   ```bash
   echo 'your-base64-encoded-string' | base64 -d
   ```
*PS: Some versions of echo add a newline. Use echo -n if you want to avoid that*

## emptyDir volume

- We will start 2 container in a pod they will share same volume at mount path `/data`
- writer-container will data some data in a file at shared volume
- reader-contianer will read the data from the shared file
- to verify | [example]()
  ```sh
  k logs <pod-name> -c reader-container
  # or
  k exec -it <pod-name> -c reader-container -- sh
  cd data
  ls
  k exec -it <pod-name> -c writer-container -- sh
  cd data
  ls
  ```