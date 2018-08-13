FROM node:8

COPY . .

RUN npm install \
	npm install add nodemon

EXPOSE 8080

CMD [ "node", "server.js"]
