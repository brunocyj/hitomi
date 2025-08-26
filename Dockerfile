# Use Node.js 18
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
