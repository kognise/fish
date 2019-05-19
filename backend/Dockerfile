FROM node:8

WORKDIR /opt/fish/backend

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3001
CMD [ "node", "index.js" ]