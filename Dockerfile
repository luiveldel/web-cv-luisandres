FROM nginx:alpine

# Copy static assets to default Nginx public folder
COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css/
COPY js /usr/share/nginx/html/js/
COPY images /usr/share/nginx/html/images/
COPY fonts /usr/share/nginx/html/fonts/
COPY about /usr/share/nginx/html/about/
COPY projects /usr/share/nginx/html/projects/

# Expose port 80
EXPOSE 80
