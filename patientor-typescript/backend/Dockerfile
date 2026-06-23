FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY  . .

RUN npm ci && npm run build

FROM build-stage AS prod

COPY --chown=node:node ./build/ .

USER node

CMD ["node","./build/index.js"]



