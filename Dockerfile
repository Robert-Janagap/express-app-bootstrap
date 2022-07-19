FROM node:latest as dev
RUN mkdir -p /usr/src/express-app-bootstrap
WORKDIR /usr/src/express-app-bootstrap
COPY package.json /usr/src/express-app-bootstrap
COPY yarn.lock /usr/src/express-app-bootstrap
RUN yarn install
COPY . /usr/src/express-app-bootstrap
EXPOSE 4000
CMD yarn dev