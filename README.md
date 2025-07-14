# Kubernetes demo applications

- Backend deployment on GKE (Google Kubernetes Engine) | [Link](https://github.com/princebansal7/backend-docker-k8s?tab=readme-ov-file#readme)
- Useful commands to Build multi platform docker images on MacBook
  ```sh
  docker buildx build --platform linux/arm64,linux/amd64 -t <docker-hub-username>/<repo-name>:<tag> --load .
  ```
