FROM node:16.13.1 AS builder
WORKDIR /app
# Install dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --development

COPY . .
RUN npm run build

FROM node:16.13.1-alpine3.10
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]