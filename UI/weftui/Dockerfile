
FROM node:23 AS build


WORKDIR /app


COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
RUN npm run build


FROM nginx:alpine


COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 80
