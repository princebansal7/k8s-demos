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