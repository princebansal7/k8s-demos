# Manifest yaml fields

- Must and required top level `fields` for creating k8s resources
  ```yaml
  apiVersion:  # version of k8s api to create the object (eg: v1 for Pod, Service & apps/v1 for ReplicaSet, Deployment), values is string
  kind:        # Type of object (Pod, ReplicaSet, Deployment, Service, etc), value is string
  metadata:    # metadata about the object we are creating (like name (string), lables (dictionary) etc), value is dictionary
  spec:        # specification about the object we are creating, value is dictionary
  ```
  example:
  ```yaml
  apiVersion: v1       # string value
  kind: Pod            # string value
  metadata:            # dict value
    name: my-pod       # string value
    lables:            # dict value
      type: backend
      app: my-pod
  spec:                # dict value
    containers:        # list/array value
      - name: ngnix-container
        image: ngnix
  ```

- Required fields for `spec` can vary based on the type of object.
  ```yaml
  apiVersion: v1 
  kind: ReplicaSet
  metadata:      
  spec: # spec is for ReplicaSet object, so required fields can vary
    template: # must
      # add pod metadata here (from above)
      # ---
    replicas: # must
    selector: # must
      matchLables: # must
        # --
  ```
## Helpful commands to generate yaml templates  

- Create an NGINX Pod
    ```sh
    kubectl run nginx --image=nginx
    ```
- Generate POD Manifest YAML file (-o yaml). Don't create it(--dry-run)
    ```sh
    kubectl run nginx --image=nginx --dry-run=client -o yaml
    ```
- Create a deployment
    ```sh
    kubectl create deployment --image=nginx nginx
    ```
- Generate Deployment YAML file (-o yaml). Don't create it(--dry-run)
    ```sh
    kubectl create deployment --image=nginx nginx --dry-run=client -o yaml
    ```
- Generate Deployment YAML file (-o yaml). Don’t create it(–dry-run) and save it to a file (`nginx-deployment.yaml`).
    ```sh
    kubectl create deployment --image=nginx nginx --dry-run=client -o yaml > nginx-deployment.yaml
    ```
- In k8s version 1.19+, we can specify the --replicas option to create a deployment with 4 replicas.
    ```sh
    kubectl create deployment --image=nginx nginx --replicas=4 --dry-run=client -o yaml > nginx-deployment.yaml
    ```