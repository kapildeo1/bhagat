FROM node:12.2.0-alpine
WORKDIR vite.config
COPY . .
RUN npm install
RUN npm run test
EXPOSE 8000
CMD ["node","vite.config.js"]
