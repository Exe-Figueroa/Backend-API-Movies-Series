FROM node:16 AS build

RUN mkdir -p /usr/src/my-store

WORKDIR /usr/src/my-store


ARG HOST
ARG DB_PORT
ARG DB_PASSWORD
ARG DB_USERNAME
ARG DB_NAME

ENV HOST=$HOST
ENV DB_PORT=$DB_PORT
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_USERNAME=$DB_USERNAME
ENV DB_NAME=$DB_NAME


COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run migrations:run

EXPOSE 8080

CMD ["npm", "start"]