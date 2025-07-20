## Commands

- Useful commands once you setup the k8s cluster and apply `ops/manifests`
  
    ```bash
    k apply -f db-manifest.yml
    k apply -f be-manifest.yml
    k apply -f fe-manifest.yml
    k apply -f rp-manifest.yml

    k get nodes
    k get pods
    k get pods -n backend-devs
    k get pods -n frontend-devs

    k get deployment
    k get deployment -n backend-devs
    k get deployment -n frontend-devs

    k get svc
    k get svc -n backend-devs
    k get svc -n frontend-devs

    k get cm
    k get secret
    k get ns

    k exec -it <nginx-pod-name> -- sh

    curl http://frontend-cip-service.frontend-devs.svc.cluster.local:80/

    curl http://backend-cip-service.backend-devs.svc.cluster.local:3000/users

    ```

- Issues:
  - in local cluster everything is working fine, getting expected response but when added `A` record with Load Balancer's external IP, requests were not working. **[FIXED] - was sending https request instead http, SSL termination not set**