FROM node:9-alpine

ARG ssh_prv_key

RUN npm i -g yarn

ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock

RUN \
  apk add --update git openssh-client python alpine-sdk && \
  echo "$ssh_prv_key" > /tmp/id_rsa && \
  chmod 600 /tmp/id_rsa && \
  eval $(ssh-agent) && \
  echo -e "StrictHostKeyChecking no" >> /etc/ssh/ssh_config && \
  ssh-add /tmp/id_rsa && \
  cd /tmp && yarn install && \
  rm /tmp/id_rsa && \
  mkdir /worker && \
  cp -a /tmp/node_modules /worker/ && \
  yarn cache clean

WORKDIR /worker
ADD . /worker/

RUN yarn build

ENTRYPOINT ["yarn", "start"]
