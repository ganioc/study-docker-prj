FROM node:9

USER yang
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
copy . .

EXPOSE 8080

CMD ["npm", "start"]


