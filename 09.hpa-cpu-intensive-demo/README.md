## HPA (Horizontal Pod Autoscaler) & Metrics server

- To Automatically adjusts the number of pod replicas in the deployment/replicaSet/statefulSet based on the observed metrics like CPU utilization/Custom metrics
- To install metrics server - helps in collecting resource usage metrics
  ```sh
  kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
  ```
- To HPA to work in **deployment** must specify `requests`. find more on [requests](./ops/deployment.yml#L21) and [averageUtilizatio](./ops/hpa.yml#18)
- HPA & metrics related commands
  ```sh
  k get hpa -w
  k describe hpa <hpa-name>
  k top pods
  ```
- Visiting `/` endpoint
  
    ![demo](images/image-1.png)

- Visiting `/cpu` endpoint => triggers CPU intensive task
  
    ![demo](images/image-2.png)

- HPA triggers pod autoscaling as CPU usage increases
  
    ![demo](images/image.png)
  
    ![demo](images/image-4.png)

- After applying resource limit to `300m`
  
    ![demo](images/image-6.png)

- CPU usage getting down
  
    ![demo](images/image-5.png)
  

- CPU usage down => HPA downscaling the pods
  
    ![demo](images/image-7.png)
  
    ![demo](images/image-8.png)