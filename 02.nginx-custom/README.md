# Custom nginx

- Created custom `ngnix` image for testing blue/green web-page along with hostname (here pod-name) | [custom-image](https://hub.docker.com/r/princebansal7/nginx-custom/tags)

- useful commands
    ```sh
    # create local cluster using kind (docker should be up)
    kind create cluster --config cluster-local.yml --name local-cluster
    kind get clusters

    # create namespace
    k create namespace nginx-demo
    k get ns

    # create deployment, service etc
    k apply -f manifest.yml

    # check resources
    k get deployment -n nginx-demo
    k get replicaset -n nginx-demo
    k get pods -n nginx-demo
    k get svc -n nginx-demo

    # check all resources
    k get all

    # cleanup
    k delete deployment nginx-deployment
    k delete svc nginx-deployment
    k delete ns nginx-demo
    kind delete cluster --name local-cluster
    ```
- Open `localhost:30007` in browser to check. If you refresh multiple times maybe you see traffic goes to one pod only because:
  - Kubernetes’s built-in service load balancing is connection-based, not request-based.
  - All requests over the same TCP connection (which a web browser typically reuses for efficiency) will hit the same pod.
- Either use different browsers to check or `curl -v localhost:30007`