# DevOps Mini Project with Kubernetes

This project demonstrates a DevOps setup using Kubernetes to deploy microservices - Car Rental Booking, Flight Booking, and Hotels Booking, along with a Gateway to handle service routing.

## Services Overview

### Flight Booking Service

- **Access:** [http://192.168.49.2:30001/flights](http://192.168.49.2:30001/flights)
- **Routes:**
  - `/flights`: Get all flights
  - `/createFlight`: Create a new flight entry

### Hotels Booking Service

- **Access:** [http://192.168.49.2:30001/graphql](http://192.168.49.2:30001/graphql)
- **Additional Info:** Utilizes GraphQL for querying hotel data

## Deployment

The project is deployed using Minikube. Below are the steps to deploy and access the services:

1. Start Minikube: 
    ```bash
    $ minikube start
    ```

2. Deploy services:
    ```bash
    $ kubectl apply -f <yaml-files>
    ```

3. Accessing services:
    - Flight Booking: [http://192.168.49.2:30001/flights](http://192.168.49.2:30001/flights)
    - Hotels Booking (GraphQL): [http://192.168.49.2:30001/graphql](http://192.168.49.2:30001/graphql)

## Screenshots

1. **Microservices Overview**  
   ![Microservices Overview](https://private-user-images.githubusercontent.com/100476241/294775697-dcf30f96-c591-4d71-b479-c7bf06b51a23.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2NTA2MzEsIm5iZiI6MTcwNDY1MDMzMSwicGF0aCI6Ii8xMDA0NzYyNDEvMjk0Nzc1Njk3LWRjZjMwZjk2LWM1OTEtNGQ3MS1iNDc5LWM3YmYwNmI1MWEyMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwN1QxNzU4NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NzNhNjBlMGJjNTMwYjY3MzAzZjA3NmU1MWU4YWNkM2Q1MWJlOWRkOTQxOTIwNDFmZTM3OTdmZWRkYTk1YWE3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.mHenLKfVmn5e249-NBMDDIhc79AY-IViuEzIXU64_0A)

2. **MongoDB Setup**  
   ![MongoDB Setup](path/to/mongodb_screenshot.png)

3. **Thunderclient Routes Testing**  
   ![Thunderclient Testing](path/to/thunderclient_screenshot.png)

4. **Jenkins Configuration**  
   - **Jenkinsfile:** Include content or reference to Jenkinsfile
   - **Jenkins Application:** Screenshot of Jenkins dashboard or relevant setup

5. **Docker Configuration**
   - **Dockerfile:** Include content or reference to Dockerfile
   - **Docker Hub:** Information about Docker Hub repository if used

## Additional Commands

Useful commands to manage the Kubernetes environment:

- `kubectl get pods`: List all running pods
- `kubectl apply -f <file>`: Apply changes using YAML file


