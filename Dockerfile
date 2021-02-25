FROM ubuntu:20.04

RUN apt-get update \
    && DEBIAN_FRONTEND="noninteractive" apt-get install -y wget tzdata nodejs npm gnupg ca-certificates \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/g$ \
    && apt-get update \
    && apt-get install -y neofetch google-chrome-stable \
    && wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/sbin/wait-f$ \
    && chmod +x /usr/sbin/wait-for-it.sh && mkdir /usr/src/app

COPY package.json /usr/src/app
RUN cd /usr/src/app && npm install
COPY . /usr/src/app
CMD node /usr/src/app/main.js
EXPOSE 8080
