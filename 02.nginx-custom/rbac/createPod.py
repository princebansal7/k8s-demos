from kubernetes import client, config

config.load_kube_config()  # Use load_incluster_config() if running inside cluster

v1 = client.CoreV1Api()

pod_name = "busybox-pod"
namespace = "rbac-demo"

# Check if pod exists
pods = v1.list_namespaced_pod(namespace, field_selector=f"metadata.name={pod_name}")
if pods.items:
    print(f"Pod '{pod_name}' already exists.")
else:
    pod_manifest = {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {"name": pod_name},
        "spec": {
            "containers": [{
                "name": "busybox",
                "image": "busybox",
                "command": ["sleep", "3600"]
            }]
        }
    }
    v1.create_namespaced_pod(namespace=namespace, body=pod_manifest)
    print(f"Pod '{pod_name}' created.")