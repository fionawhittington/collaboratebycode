FROM node:8

RUN npm install amdefine@1.0.1 \
    npm install body-parser@1.15.2 \
    npm install ejs@2.5.1 \
    npm install express@4.16.3 \
    npm install express-ejs-layouts@2.2.0 \
    npm install mongoose@5.0.9 \
    npm install node-import@0.9.2 \
    npm install nodemon@1.10.2 \
    npm install package.js@1.1.3 \
    npm install package.json@2.0.1 \
    npm install requirejs@2.3.5 \
    npm install twit@2.2.9 \
    npm install uniq@1.0.1

COPY . .

EXPOSE 8080

CMD [ "node", "server.js"]
