FROM node:22 AS build-stage
WORKDIR /usr/src/app

COPY . .

RUN npm ci && npm run build

FROM build-stage AS test

RUN ["npm", "run", "test"]

FROM nginx:1.29-alpine

COPY --from=test /usr/src/app/dist /usr/share/nginx/html


