# Sample Dockerized node server

This is a basic Express server that's been Dockerized, with some tweaks to make it easier to develop against. It's a solid starting point for new projects using Yarn and node 8.9.

It uses Docker Compose (3.2) for local development, with nodemon set up to rebuild the process on file changes. Starting the project requires Docker engine 17.04.0+. From the project root, run

`docker-compose up`

to start, which will start the server running on port 3000.
