FROM node:18-alpine

WORKDIR /PortfolioWebpage

COPY . .

RUN yarn global add http-server

CMD ["http-server", ".", "-p", "3000"]

EXPOSE 3000






