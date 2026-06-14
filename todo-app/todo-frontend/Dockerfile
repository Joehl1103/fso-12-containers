FROM node:24 AS build-stage
WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm ci && npm run build

FROM build-stage AS test

RUN ["npm","run","test"] 

COPY --from=build-stage . .  

FROM nginx:1.29-alpine

COPY --from=test /usr/src/app/dist /usr/share/nginx/html


