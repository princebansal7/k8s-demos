FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html

# overwrite the default Nginx config
RUN echo 'server {\n\
    listen 80;\n\
    location /hostname {\n\
        default_type text/plain;\n\
        return 200 "$hostname\\n";\n\
    }\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf