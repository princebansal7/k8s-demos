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