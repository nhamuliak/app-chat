# Specify Node version and Image
# name Image as "development"
FROM node:20 AS development

# Specify working directory inside the container
#RUN mkdir -p /nazar-hamuliak/src/app
WORKDIR /usr/src/app

# Copy package from host to inside cotainer wirking directory
COPY package*.json ./

# Install deps inside the container
RUN npm install

COPY . .

RUN npm install -g @angular/cli@17

EXPOSE 4200

# Set the default command to start the application
CMD ["npm", "run", "start"]


###############################
####### PRODUCTION ############
###############################

#Build another image named production
#FROM node:20 AS production
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#
## Set work dir
#WORKDIR /usr/src/app
#
#COPY --from=development /usr/src/app .
#
#EXPOSE 9000
