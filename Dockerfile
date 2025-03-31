# Build stage
FROM oven/bun:1 as builder

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1-slim

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Install only production dependencies
RUN bun install --production --frozen-lockfile

ENV HOST=0.0.0.0
ENV PORT=4321

# Expose the port the app runs on
EXPOSE 4321

# Start the application
CMD ["bun", "./dist/server/entry.mjs"] 