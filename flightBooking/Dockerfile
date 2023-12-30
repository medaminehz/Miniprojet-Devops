FROM node:lts-alpine

WORKDIR /usr/src/app

RUN apk --no-cache add python3 make g++

COPY package*.json ./


RUN npm install


COPY index.js ./   

EXPOSE 3006

CMD ["node", "index.js"]   
