
FROM node:14


WORKDIR /api


COPY package*.json ./
RUN npm install


COPY . /api


RUN npm run build


RUN npm install -g serve


EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]

