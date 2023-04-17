FROM node:18-alpine as angular

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . . 

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]


