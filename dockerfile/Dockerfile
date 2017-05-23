FROM node:alpine

RUN apk add --update ffmpeg

ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
