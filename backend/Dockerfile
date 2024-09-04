# Use the official Node.js image from Docker Hub
FROM node:18

# Install netcat-openbsd for the wait script
RUN apt-get update && apt-get install -y netcat-openbsd

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the necessary dependencies
RUN npm install

# Copy the entire application to the Docker container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the application in development mode
CMD ["npm", "run", "dev"]
