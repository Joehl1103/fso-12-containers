FROM node:24.5.0

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends dumb-init

WORKDIR /usr/src/todo-backend

COPY --chown=node:node . . 

RUN npm ci --omit=dev

ENV DEBUG=todo-backend

USER node

CMD ["dumb-init","node","./bin/www"]


