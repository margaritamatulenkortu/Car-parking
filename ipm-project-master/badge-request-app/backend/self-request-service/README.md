To run Spring-Boot app, open terminal and use the command *mvnw spring-boot:run*


**Current endpoints:**


GET: http://localhost:8085/api/visitors -  Get all entries

POST http://localhost:8085/api/visitors/ - Post new entry for visitor request

POST http://localhost:8085/api/associates - Post new entry for associate request

GET: http://localhost:8085/api/visitors{id} - Get specific entry by ID

Current docker compose file supports starting a previously built image called **self-request-docker**. 

**Current process for deploying to docker:**

1. Maven- Clean+Install build jar file
2. At root directory: docker build -f Dockerfile -t self-request-docker .
3. At root directory: docker-compose up
