FROM node:8

WORKDIR /opt/fish

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]