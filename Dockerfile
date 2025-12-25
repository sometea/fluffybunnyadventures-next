FROM node:24-alpine as builder
WORKDIR /code/
ADD package-lock.json .
ADD package.json .
RUN npm ci
ADD . .
RUN npm run export

FROM docker.io/devforth/spa-to-http:latest
COPY --from=builder /code/out/ . 