# # This Dockerfile is used to build a container for a Node.js web application.

# # Use the official Node.js 18 Alpine image as the base image
# FROM node:18-alpine

# # Set the working directory inside the container
# WORKDIR /PortfolioWebpage

# # Copy all files from the current directory to the working directory inside the container
# COPY . .

# # Install http-server globally using yarn package manager
# RUN yarn global add http-server

# # Set the command to run when the container starts
# CMD ["http-server", ".", "-p", "3000"]

# # Expose port 3000 to allow incoming connections to the container
# EXPOSE 3000


FROM nginx:1.25.4

COPY . /usr/share/nginx/html

EXPOSE 80







