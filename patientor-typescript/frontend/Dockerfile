FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci && npm run build

FROM nginx:alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
