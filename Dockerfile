FROM node:12-alpine

WORKDIR /app

EXPOSE 3000

COPY . .



RUN npm install
CMD npm run start
