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

    # Delete all Kubernetes objects defined in the YAML files located in the current directory (.)
    # It only deletes resources defined in those YAMLs, not “everything in the cluster.”
    # If your YAML files include metadata.namespace: some-namespace, the resources in that namespace are deleted.
    # If no namespace is specified, it defaults to the current namespace
    kubectl delete -f . --dry-run=client # To see what it would delete first
    kubectl delete -f . # to actually delete
    ```
- Here we created local cluster using kind (k8s inside docker), some key points to remember:
  - Kind runs Kubernetes nodes as Docker containers.
  - To access cluster services from your host, you must expose ports using *`extraPortMappings`*.
  - Here in [cluser-local.yml](./cluster-local.yml#L5), we specified port mapping which maps container's (kind node) port with host machine's port.
  - This works similarly to Docker’s `-p hostPort:containerPort` mapping.
  - Only the control-plane node typically needs these mappings for access from outside (since it acts as the gateway)
- Open `localhost:30007` in browser to check. If you refresh multiple times maybe you see traffic goes to one pod only because:
  - Here Kubernetes’s built-in service (NodePort and kube-proxy) load balancing is connection-based, not request-based.
  - All requests over the same TCP connection (which a web browser typically reuses for efficiency) will hit the same pod.
- Either use different browsers to check or `curl -v localhost:30007`