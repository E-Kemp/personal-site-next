ARG node_version=18.16-alpine3.17

FROM node:${node_version} as builder
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn --frozen-lockfile

FROM node:${node_version} as base
RUN mkdir /opt/next-app
WORKDIR /opt/next-app
COPY --from=builder /node_modules /opt/next-app/node_modules
COPY ./ ./

FROM base as dev
CMD [ "yarn", "start:dev" ]

FROM base as prod
RUN yarn build
CMD [ "sh", "-c", "yarn build && yarn start" ]
