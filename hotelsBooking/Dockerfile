FROM node:lts-alpine

WORKDIR /usr/src/app

RUN apk --no-cache add python3 make g++

COPY package*.json ./


RUN npm install --force


COPY . . 

EXPOSE 4000

CMD ["node", "index.js"]    
