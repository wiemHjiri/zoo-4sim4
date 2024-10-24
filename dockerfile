# Use the official Node.js image as a base image
FROM node:18-alpine
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the container
COPY . .
# Build the application
RUN npm run build
# Expose the port that the NestJS app listens on (default 3000)
EXPOSE 3000
# Specify the command to run the app
CMD ["npm", "run", "start:prod"]