# base image
FROM node:10.16-jessie

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install node_modules with yarn
ADD package.json yarn.lock /tmp/
RUN cd /tmp && yarn
RUN mkdir -p /usr/src/app && cd /usr/src/app && ln -s /tmp/node_modules

# start app
CMD ["yarn"]
CMD ["yarn", "start"]
