# express

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


- Initial mistakes i did while deploying it to k8s cluster.
    - I am passing DB_URL as env variable from .env file, and when I created the docker image, I didn't COPY the env file in image hence, when k8s pods was trying to access the connection string (DB_URL) they weren't able to get it. Hence Pods was failing to connect with db pod.
    - Either I can Hardcode the connection url or I can pass it in the backend manifest file itself as env var.
    - Better way is to use config maps
