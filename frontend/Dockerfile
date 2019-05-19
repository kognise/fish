FROM node:8

WORKDIR /opt/fish/frontend

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]