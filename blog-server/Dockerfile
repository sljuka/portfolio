FROM node:10-alpine AS ts-builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn clean
RUN yarn build

FROM node:10-alpine AS ts-prod
WORKDIR /app
COPY --from=ts-builder ./app/dist ./dist
COPY package.json yarn.lock ./
RUN yarn install --production
CMD yarn start
