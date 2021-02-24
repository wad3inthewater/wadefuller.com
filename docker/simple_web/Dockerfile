# specify a base image
FROM node:alpine

WORKDIR /usr/app
COPY ./package.json ./
# install dependencies
RUN npm install
COPY ./ ./

# default command
CMD ["npm", "start"]