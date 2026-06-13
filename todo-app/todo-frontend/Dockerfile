FROM node:24 AS build-stage
WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm ci && npm run build

FROM build-stage AS test

COPY --from=build-stage /usr/src/app/dist .

RUN ["npm","run","test"] 

FROM nginx:1.29-alpine

COPY --from=test /dist /usr/share/nginx/html


