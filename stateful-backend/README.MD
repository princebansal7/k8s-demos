## Docker volumes

-  Bind Mount (mounts your machine folder with container's folder - synced)
   ```bash
   docker run -v <absolute-path>/stateful-backend/bind-mount-dir:/app/generated princebansal7/stateful-filewrite-backend:v4
   ```