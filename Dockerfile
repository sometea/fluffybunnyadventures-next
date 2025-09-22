FROM docker.io/pierrezemb/gostatic:latest

WORKDIR /srv/http

COPY out/ .

EXPOSE 3000

CMD ["-fallback", "/index.html", "-port", "3000"]