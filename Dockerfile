FROM node:12

# Bundle app source
COPY . .

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Build the frontend React pages
RUN ["npm", "run", "build"]

EXPOSE 3000-3001

CMD [ "npm", "run", "devserver" ]
