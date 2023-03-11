FROM node:18-alpine3.16 as angular

WORKDIR /app

COPY package.json /app

RUN npm install --silent

COPY . . 

RUN npm run build


FROM nginx:alpine 
VOLUME /var/cache/nginx
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
