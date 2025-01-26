# docker file for nuxt project
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable
RUN corepack prepare --activate
RUN pnpm install
COPY . .
RUN pnpm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.output ./.output
COPY ./migrations ./migrations

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
