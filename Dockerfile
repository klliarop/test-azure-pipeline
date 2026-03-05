FROM node:18
WORKDIR /app
COPY . .
EXPOSE 3003
CMD ["node", "server.js"]
