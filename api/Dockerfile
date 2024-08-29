# Specify Node version and Image
# name Image as "development"
FROM node:20 AS development

# Specify working directory inside the container
WORKDIR /usr/src/api

# Copy package files from host to inside cotainer working directory
COPY package*.json ./

# Install deps inside the container
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# Set the default command to start the application
CMD ["npm", "run", "start:dev"]

###############################
####### PRODUCTION ############
###############################

# Build another image named production
FROM node:20 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set work dir
WORKDIR /usr/src/api

COPY --from=development /usr/src/api .

EXPOSE 3000

# run app
CMD ["node", "dist/main"]
