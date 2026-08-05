FROM node:18-alpine

WORKDIR /app

# copy package manifests first for deterministic installs
COPY package*.json ./
COPY backend/package*.json backend/
COPY frontend/package*.json frontend/

# copy source files
COPY backend ./backend
COPY frontend ./frontend

# install backend and frontend dependencies and build the frontend
RUN npm ci --prefix backend
RUN npm ci --prefix frontend
RUN npm --prefix frontend run build

EXPOSE 5000

ENV NODE_ENV=production
ENV PORT=5000

CMD ["npm", "start"]
