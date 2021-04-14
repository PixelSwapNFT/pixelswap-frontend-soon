FROM node:14-alpine as builder

RUN apk add --update \
    bash \
    lcms2-dev \
    libpng-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
    && rm -rf /var/cache/apk/*

WORKDIR /usr/src

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine

WORKDIR /app

COPY ./docker/nginx /etc/nginx

COPY --from=builder /usr/src/build /app
