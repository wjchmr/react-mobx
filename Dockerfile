FROM node:16.14.2 as builder
WORKDIR /app
COPY . .
RUN yarn && npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
