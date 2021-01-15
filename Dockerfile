#FROM arm32v7/node:15
FROM node:15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]
