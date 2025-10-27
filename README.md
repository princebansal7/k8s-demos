# Kubernetes demo applications

###### Apologies for low audio in few demo videos (watch in 1.5x)
- yaml basics | [link](https://github.com/princebansal7/k8s-demos/tree/main/00.yaml-basics#yaml-basics)
- Basic k8s resources and yaml template commands | [Link](https://github.com/princebansal7/k8s-demos/tree/main/01.noob-manifests)
- custom nginx image deployment with NodePort service | [Link](https://github.com/princebansal7/k8s-demos/blob/main/02.nginx-custom/manifest.yml)
- Node DB app on k8s demo (without ConfigMap) | [YT](https://youtu.be/Q7aZ8Jrl4E4?si=S0_ODgsWFMWjb7ZV)
- Node DB app on k8s (with [ConfigMap](https://github.com/princebansal7/k8s-demos/blob/main/04.node-configmap-secrets-k8s/ops/configmap.yml) & [Secrets](https://github.com/princebansal7/k8s-demos/blob/main/04.node-configmap-secrets-k8s/ops/secrets.yml)) | [Link](https://github.com/princebansal7/k8s-demos/blob/main/04.node-configmap-secrets-k8s/ops/deployment.yml)
- emptyDir emphemeral volume | [Link](https://github.com/princebansal7/k8s-demos/tree/main/04.node-configmap-secrets-k8s#readme)
- Ingress service k8s demo | [YT](https://youtu.be/vIvbZynxYDA)
- Mimic Ingress service with custom LB and reverse proxy demo | [YT](https://youtu.be/UhT6qguVWz8)
- Volume mount and Secret | [Link](https://github.com/princebansal7/k8s-demos/blob/main/07.node-secrets-volume-mount/deployment-volume-mount.yml)
- HPA (Horizontal Pod Scaler) & Metrics Server | [Link](https://github.com/princebansal7/k8s-demos/tree/main/09.hpa-cpu-intensive-demo#readme)
- Helm & Helm Charts | [Link](https://github.com/princebansal7/k8s-demos/tree/main/10.helm-custom-charts#readme)
- CICD with GitOPS and ArgoCD demo | [YT](https://youtu.be/1rP_r2Nizdc) | [Repo](https://github.com/princebansal7/gitops-argocd-k8s?tab=readme-ov-file#readme) | [cicd-file](https://github.com/princebansal7/npx-cicd-project/blob/main/.github/workflows/ci-cd.yaml)

- Node app deployment on GKE (Google Kubernetes Engine) (Old) | [Link](https://github.com/princebansal7/backend-docker-k8s?tab=readme-ov-file#readme)

- Useful commands to Build multi platform docker images (on Apple silicon)
  
  - Building image for both platforms
    ```bash
    docker buildx build --platform linux/arm64,linux/amd64 -t <docker-hub-username>/<repo-name>:<tag> --load .
    ```
  - Building image for Linux platform (on Apple silicon)
    ```bash
    docker build --platform=linux/amd64 -t <docker-hub-username>/<repo-name>:<tag> .
    ```
