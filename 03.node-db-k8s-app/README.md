## Backend and K8s Manifests

- To install dependencies:

    ```sh
    cd express
    bun install
    ```

- To run:

    ```sh
    bun run index.ts
    ```

- Initial mistakes I did while deploying backend to k8s cluster:
  - I am passing **DB_URL** as env variable from `.env` file, and when I created the docker image, I didn't COPY the `.env` file in it hence, when k8s pods was trying to access the connection string (DB_URL) they weren't able to get it. Hence Pods was failing to connect with db pod.
  - Solution:
    - Either I can Hardcode the connection url or I can pass it in the backend manifest file itself as env var.
    - Better way is to use **ConfigMaps**
