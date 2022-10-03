#Primera Etapa
FROM node:18.9.1-alpine as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/app-hector-romero /usr/share/nginx/html
