FROM node:14

WORKDIR /mailing-server

COPY package.json . 

RUN npm install

COPY  . /mailing-server/

EXPOSE 3010

CMD [ "npm" , "start" ]