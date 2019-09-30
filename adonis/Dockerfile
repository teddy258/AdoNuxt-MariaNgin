FROM node:10.7

ENV APP_ROOT /adonis

WORKDIR ${APP_ROOT}

RUN npm i -g pm2 --silent 

ENV HOST 0.0.0.0
EXPOSE 3333

#dev mode
CMD ["pm2-docker","run-dev.yml"]

#release mode
#CMD ["pm2-docker","run.yml"]

