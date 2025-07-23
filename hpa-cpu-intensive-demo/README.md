## HPA (Horizontal Pod Autoscaler) & Metrics server

- To install metrics server
  ```sh
  kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
  ```
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

    ![demo](images/image-6.png)

- CPU usage getting down
  
    ![demo](images/image-5.png)
  

- CPU usage down => HPA downscaling the pods
  
    ![demo](images/image-7.png)
  
    ![demo](images/image-8.png)