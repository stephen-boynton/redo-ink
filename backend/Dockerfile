FROM node:8.9-alpine

RUN mkdir -p /srv
WORKDIR /srv
COPY app/package.json /srv

RUN npm install

COPY app/ /srv
CMD ["npm", "start"]
EXPOSE 3000