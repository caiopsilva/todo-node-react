FROM node:10.13.0

WORKDIR /app

COPY package.* /app
RUN npm install --silent --progress=false
COPY . /app

CMD npm start

EXPOSE 3001