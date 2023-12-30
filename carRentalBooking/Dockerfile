FROM node:lts-alpine

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY carRentalServer.js ./   

EXPOSE 50051

CMD ["node", "carRentalServer.js"]  
