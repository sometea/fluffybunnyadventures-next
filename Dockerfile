# Use the lightweight Caddy image
FROM caddy:2-alpine

# Set the working directory
WORKDIR /usr/share/caddy

# Copy your built static site into the container
COPY out/ .

# Provide a Caddyfile for SPA routing
COPY Caddyfile /etc/caddy/Caddyfile