FROM node:lts-alpine

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


COPY index.js ./    

EXPOSE 5001

CMD ["node", "index.js"]    
