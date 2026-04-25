# Helm chart creation and useful commands

- Initialize Helm Chart
  ```bash
  mkdir <dir-name>
  cd <dir-name>
  helm create .
  ```
- Remove default templates
  ```bash
  rm -rf templates/*
  ```
- Create templates like Deployment, Service etc in `templates/` folder.
- `values.yaml` is the file where developers add their custom values and create multiple apps using Helm as they required without repeating the yaml manifests again and again.
- `Cluster.yaml` is the file where helm chart related metadata gets store like node's `package.json` file
- Install the Chart
  ```bash
  helm install <your-chart-name> .
  
  helm install <your-chart-name2> . --values values.yaml
  helm install <your-chart-name3> . --values values1.yaml
  helm install <your-chart-name4> . --values values2.yaml
  ```
- Templates modified? to upgrade chart
  ```bash
  helm upgrade <your-chart-name> .
  ```
- To Debug the helm Chart
  ```bash
  helm template <your-namespace-name> .
  ```

## More useful commands:

- Search from Repository
  ```sh
  helm search repo wordpress
  ```
- Search from ArtifactHub
  ```sh
  helm search hub wordpress
  ```
- Add repo
  ```sh
  helm repo add <repo-local-name> <repo-link>
  helm repo add bitnami https://charts.bitnami.com/bitnami
  ```
- List repos
  ```sh
  helm repo list
  ```
- Add install from repo
  ```sh
  helm install nginx-demo bitnami/nginx
  # specific version
  helm install nginx-demo bitnami/nginx --version 18.2.1
  ```
- List the installed releases
  ```sh
  helm list
  ```
- List revision history of release
  ```sh
  helm history <release-name>
  helm history nginx-demo
  ```
- Upgrade revision
  ```sh
  helm upgrade nginx bitnami/nginx --version 18.3.6
  ```
- Rollback revision
  ```sh
  helm history nginx-demo
  helm rollback nginx-demo <REVISION>
  ```