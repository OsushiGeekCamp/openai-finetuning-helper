FROM node:21-alpine3.18

WORKDIR /app

RUN npm install -g pnpm@latest

COPY pnpm-lock.yaml package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
