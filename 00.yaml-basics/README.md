# yaml basics
- YAML stands for **“YAML Ain’t Markup Language”** — it’s a human-readable data serialization format used mainly for configuration files (e.g., in Kubernetes, Docker Compose, GitHub Actions, Terraform, Ansible, etc.).
- It’s similar to JSON but simpler and more readable.
- File extension can be either `yaml` or `yml`

# Concepts

1. yaml uses `key-value` pairs - Keys and values are separated by colon + space (:), after colon there must be space.
    ```yaml
    name: Prince Bansal
    role: SDE
    ```
2. YAML uses indentation with spaces, not tabs, Indentation defines structure (nesting).
   - Always use 2 spaces per level (or 4 - just be consistent).
   - No tabs — YAML will break.
     ```yaml
     person:
       name: Prince
       age: 26
       address:
         city: Bengaluru
         state: Karnataka
     ```
3. Arrays (Lists)
   - Represented using a dash (-).
     ```yaml
     skills:
       - Terraform
       - Kubernetes
       - AWS
       - GCP
     ```
   - You can also nest objects inside lists
     ```yaml
     projects:
       - name: Migration
         cloud: AWS
         services:
           - EC2
           - ECR
           - EKS
       - name: Monitoring
         tool: Prometheus
     ```
4. Data Types
   
    | Type    | Example                                          |
    | ------- | ------------------------------------------------ |
    | String  | `name: Prince`                                   |
    | Integer | `age: 26`                                        |
    | Float   | `height: 5.9`                                    |
    | Boolean | `is_active: true`                                |
    | Null    | `nickname: null` or `nickname:` i.e, empty value |
    | Array   | `skills: [AWS, GCP, Terraform]`                  |
    | Object  | Nested indentation or `{ key: value }`           |

5. Inline formats example
   ```yaml
   person: { name: Prince, age: 26 }
   skills: [Terraform, Kubernetes, Docker] # old way to write list

   # some special examples
   sweet: null
   salty: ~        # also represents null
   octal_val: 0o225F7   # correct YAML octal prefix is 0o (not 0x, which is hex)
   binary_val: 0b0100    # correct YAML binary prefix is 0b. 
   hex_val: 0x225F7      # correct YAML hex prefix is 0x
   date: 2025-10-06      # YYYY-MM-DD
   time: 2025-10-06T08:30:20Z # YYYY-MM-DDTHH:mm:ssZ (ISO 8601 format)
   ```

6. use `#` for comment
   ```yaml
   # This is a comment
   name: Prince  # inline comment
   ```
7. Multi-line strings
   - Literal block (|) - preserves newlines
   ```yaml
    bio: |
      Prince is a Platform Engineer.
      He loves working with cloud infrastructure.
   ```
   - Folded block (>) — folds newlines into spaces, Output will be one line.
   ```yaml
    summary: >
      Prince is a Platform Engineer
      who works with AWS and GCP.
   ```
8. Scalars and Quotes
   - You can use 'single' or "double" quotes.
   - Quotes are optional unless special characters are present.
   ```yaml
    path: "/usr/local/bin"
    greeting: "Hello, world!"
    note: 'YAML is easy'
   ```
9. Boolean values
   - below shown all are valid boolean values:
   - internally they’re equivalent to `true/false`.
   ```yaml
    enabled: true
    debug: false
    active: yes
    deleted: no
   ```
10. Environment Variables / References
   - Some systems like Docker Compose or GitHub Actions allow variable interpolation:
   ```yaml
    version: "3.8" # represents version of type of configuration (docker, GitHub Actions etc, not yaml's version)
    services:
      web:
        image: nginx:${NGINX_VERSION}
   ```
11. Anchors & Aliases (DRY Principle)
    - YAML supports reuse of repeated values using & (anchor) and * (alias).
    - `&default` defines a reusable block (can be named anything)
    - `*default` refers to it
    - `<<:` merges its contents
    ```yaml
    defaults: &default
      region: us-east-1
      retries: 3
      instance_type: t4.xlarge

    dev:
      <<: *default
      region: us-west-2 # override just this
      # can append more values

    prod:
      <<: *default # will add 3 values here
    ```
    - Example
    ```yaml
    base-packages: &pkgs
      - curl
      - git
      - nodejs

    ubuntu:
      packages: *pkgs

    centos:
      packages:
      - *pkgs
      - yum-utils   # adds one more
    ```
12. YAML Type Enforcement (!!type)
    ```yaml
    zip_code: !!str 560066      # Force this to be a string (not number)
    count: !!int "96"           # Force this to be an integer
    pi: !!float "3.14159"       # Force float type
    is_active: !!bool "true"    # Force boolean type

    # YAML auto-detects types, so normally you don’t need to force them.
    age: 25        # auto -> integer
    city: "Delhi"  # auto -> string

    # But type enforcement (!!) is useful when YAML guesses wrong
    postal_code: 00120      # auto → integer (leading zero lost)
    postal_code: !!str 00120  # force string
    ```
13. YAML Sets
    ```yaml
    fruits: !!set
      apple: null
      banana: null
      mango: null # This represents a set of unique items: {"apple", "banana", "mango"}.

      # inline syntax
      colors: !!set { red: null, green: null, blue: null }
    ```

## Some Real World Examples
- Docker Compose file
  ```yaml
  version: "3"
  services:
    web:
      image: nginx:latest
      ports:
        - "80:80"
    db:
      image: postgres
      environment:
        POSTGRES_PASSWORD: example
  ```
- GitHub Actions Workflow
  ```yaml
  name: CI
  on: [push]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Install dependencies
          run: npm install
        - name: Run tests
          run: npm test
  ```
- k8s deployment
  ```yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: nginx-deployment
  spec:
    replicas: 3
    selector:
      matchLabels:
        app: nginx
    template:
      metadata:
        labels:
          app: nginx
      spec:
        containers:
          - name: nginx
            image: nginx:latest
            ports:
              - containerPort: 80
  ```
