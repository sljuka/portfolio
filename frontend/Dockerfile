FROM node:10-alpine AS ts-builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn clean
RUN yarn build

FROM node:10-alpine AS ts-prod
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY --from=ts-builder ./app/dist ./dist
COPY --from=ts-builder ./app/public ./public
CMD yarn start
