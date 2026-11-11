FROM node:20-alpine
WORKDIR /app
COPY server.js package.json ./
COPY public ./public
COPY public/rpg ./public/rpg
EXPOSE 3000
CMD ["node", "server.js"]
