FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npm i --only=prod

COPY . .
RUN npm run build

CMD [ "npm", "run", "start:prod" ]
