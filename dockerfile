FROM node:22-alpine
WORKDIR /app
# Enable pnpm via Corepack (bundled with Node 22)
RUN corepack enable
EXPOSE 3000
# Bind dev server to 0.0.0.0 so the host can reach it
CMD ["sh", "-c", "pnpm install && pnpm dev"]