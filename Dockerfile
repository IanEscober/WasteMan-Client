ARG baseTag=1.16-alpine
ARG buildTag=8.16-alpine
ARG baseImage=nginx
ARG buildImage=node

FROM ${baseImage}:${baseTag} as base
EXPOSE 80
RUN rm -rf /etc/nginx/conf.d
COPY ./conf /etc/nginx
RUN apk add --no-cache bash

FROM ${buildImage}:${buildTag} as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./public ./public
COPY ./src ./src
RUN npm run build

FROM base as final
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html
COPY ./env.sh .
COPY ./.env .
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]