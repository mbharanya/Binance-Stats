FROM node:15
WORKDIR /app
COPY *.js* /app
RUN npm install
CMD [ "node", "/app/index.js" ]