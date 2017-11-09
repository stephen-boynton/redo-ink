FROM node:8.9-alpine

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install -g serve
CMD serve -s build
EXPOSE 3000

RUN mkdir -p /srv
WORKDIR /srv
COPY app/package.json /srv
COPY app/npm-shrinkwrap.json /srv
COPY app/ /srv

RUN npm install
