FROM node:alpine

RUN apk update
RUN apk add --udpate ffmpeg

ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
