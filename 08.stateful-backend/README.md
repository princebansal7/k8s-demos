## Docker volumes

-  Bind Mount (mounts your machine folder with container's folder - synced)
   ```bash
   docker run -v <absolute-path>/stateful-backend/bind-mount-dir:/app/generated princebansal7/stateful-filewrite-backend:v4
   ```
    Now, even if the container is removed the local file will still exists

- Volume mounts (data persists even when container is removed)
    - To list volumes
        ```bash
        docker volume ls
        ```
    - To create volume
        ```bash
        docker volume create test-volume
        ```
    - To mount volume
        ```bash
        docker run -v test-volume:/app/generated princebansal7/stateful-filewrite-backend:v4
        ```