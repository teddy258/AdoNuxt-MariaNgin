FROM node:10.7

ENV APP_ROOT /nuxt

WORKDIR ${APP_ROOT}

RUN npm i -g pm2 --silent 

# Production Mode -> Delete sharp
# RUN npm run build


ENV HOST 0.0.0.0
EXPOSE 3000

#dev mode
CMD ["pm2-docker","run-dev.yml"]

#release mode
#CMD ["pm2-docker","run.yml"]
