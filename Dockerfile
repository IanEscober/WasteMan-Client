FROM node:8.16.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine
EXPOSE 80
RUN rm -rf /etc/nginx/conf.d
COPY ./conf /etc/nginx
COPY --from=build /app/build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]