# Custom nginx

- Created custom `ngnix` image for testing blue/green web-page along with hostname (here pod-name) | [custom-image](https://hub.docker.com/r/princebansal7/nginx-custom/tags)

- useful commands
  ```sh
    # Create local cluster using kind (docker should be up)
    kind create cluster --config cluster-local.yml --name local-cluster
    kind get clusters

    # Create namespace
    k create namespace nginx-demo
    k get ns

    # Create deployment, service etc
    k apply -f manifest.yml

    # Check resources
    k get deployment -n nginx-demo
    k get replicaset -n nginx-demo
    k get pods -n nginx-demo
    k get svc -n nginx-demo

    # Check all resources
    k get all

    # Cleanup
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

## Authentication, Authorization and RBAC

- `Authentication:` Process of verifying a user's identity before granting them access to system or resources.
- `Authorization:` Process of determining what an authenticated entity is allowed to do.
- `RBAC (Role Based Access Control):` It enables us to control what actions users / Groups / Service Account can perform on resources within your cluster.

- RBAC demo using CLI:
  ```sh
  k create sa test-sa
  k get sa
  k create token test-sa --duration=24h
  export TOKEN=<generated-jwt-token>
  echo $TOKEN
  k cluster-info
  # Service account will not be able to access pods as don't have permission
  curl -k https://127.0.0.1:51871/api/v1/namespaces/default/pods --header "Authorization: Bearer $TOKEN"

  # Create role which gives read permission for pods
  k create role test-pod-reader --verb=list --resource=pods
  k get role
  k describe role test-pod-reader

  # Create rolebinding which binds service account and above created role
  k create rolebinding test-rolebinding --role=test-pod-reader --user=system:serviceaccount:default:test-sa
  k get rolebinding
  # Now service account will be able to list pods
  curl -k https://127.0.0.1:51871/api/v1/namespaces/default/pods --header "Authorization: Bearer $TOKEN"
  # Create pod if there isn't any in cluster yet
  k run nginx-test-pod --image=nginx --port=80
  curl -k https://127.0.0.1:51871/api/v1/namespaces/default/pods --header "Authorization: Bearer $TOKEN"

  # Cleanup
  k delete pod nginx-test-pod
  k delete role test-pod-reader
  k delete rolebinding test-rolebinding
  k delete sa test-sa
  k get nodes
  ```
- Check RBAC demo [Link]()