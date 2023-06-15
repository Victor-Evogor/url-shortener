FROM node:18

# Create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY . .

EXPOSE 8080

RUN chmod +x build.sh

RUN npm install

RUN npm run build

CMD ["npm","start"]

