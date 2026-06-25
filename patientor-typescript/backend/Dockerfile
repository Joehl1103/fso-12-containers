FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY  . .

RUN npm ci && npm run build

CMD ["node","./build/index.js"]



