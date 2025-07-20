# Kubernetes demo applications

###### Apologies for low audio in demo videos
- Node DB app on k8s demo | [Link](https://youtu.be/Q7aZ8Jrl4E4?si=S0_ODgsWFMWjb7ZV)
- Ingress service k8s demo | [Link](https://youtu.be/vIvbZynxYDA)
- Mimic Ingress service demo | [Link](https://youtu.be/UhT6qguVWz8)

- Node app deployment on GKE (Google Kubernetes Engine) (Old) | [Link](https://github.com/princebansal7/backend-docker-k8s?tab=readme-ov-file#readme)

- Useful commands to Build multi platform docker images (on Apple silicon)
  
  - Building image or both platforms
  ```bash
  docker buildx build --platform linux/arm64,linux/amd64 -t <docker-hub-username>/<repo-name>:<tag> --load .
  ```
  - Building image or Linux platform (on Apple silicon)
  ```bash
  docker build --platform=linux/amd64 -t <docker-hub-username>/<repo-name>:<tag> .
  ```
