# Docker Compose Practice: Deploying Node.js Application with MongoDB

This repository contains practice files and examples for deploying a Node.js application with MongoDB using Docker Compose.

## Docker Installation:

Make sure Docker and Docker Compose are installed on your system using the following commands:

```bash
sudo apt update
sudo apt upgrade
sudo apt install docker.io
sudo apt install docker-compose
sudo usermod -aG docker ubuntu
sudo docker run hello-world
```
## Create a Node Project:
To create a Node.js project, follow these steps:

- Create a project folder.
- Initialize `package.json` using npm init.
- Install dependencies and generate `package-lock.json`:
  
  ```bash
  npm install
  npm install express
  npm install mongoose # for MongoDB
  ```
## Docker Compose Running Commands:
Use the following commands to manage your Docker Compose environment:
- Build and start containers:
``` bash
docker-compose up --build -d
```
Check logs for a specific image:
```bash
docker-compose logs <Image name>
```
Replace <Image name> with the name of the Docker image you want to check logs for.

Feel free to explore the provided Docker Compose files and modify them according to your project's requirements.

Happy Dockerizing!

