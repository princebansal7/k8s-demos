# RBAC Demo
- We have a python script which creates a pod (in local kind cluster) in provided namespace (here `rbac-demo`)
- To setup use below commands:
    ```sh
    # Create namespace
    k created ns rbac-demo

    # Setup python env
    cd rbac
    python3 -m venv .k8spy
    source .k8spy/bin/activate
    pip3 install kubernetes
    python3 createPod.py

    k get pods -n rbac-demo
    ``` 
- Create `ServiceAccount`, `Role` and bind them with `RoleBinding`
    ```sh
    # Create RABC related resource
    k apply -f rbac.yml

    # Check created resources
    k get sa -n rbac-demo
    k get role -n rbac-demo
    k get rolebinding -n rbac-demo

    k describe role pod-creator-role -n rbac-demo
    k describe rolebinding pod-creator-binding -n rbac-demo

    # Check whether SA can access pods with give permissions or not
    k auth can-i get pods --as=pod-creator -n rbac-demo
    k auth can-i get pods --as=system:serviceaccount:rbac-demo:pod-creator -n rbac-demo # yes
    k auth can-i get deployment --as=system:serviceaccount:rbac-demo:pod-creator -n rbac-demo # no
    k auth can-i delete pods --as=system:serviceaccount:rbac-demo:pod-creator -n rbac-demo # no
    ```