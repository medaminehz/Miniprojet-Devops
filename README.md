# DevOps Mini Project with Kubernetes

This project is a DevOps setup using Kubernetes to deploy microservices - Car Rental Booking, Flight Booking, and Hotels Booking, along with a Gateway to handle service routing.

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
   ![Microservices Overview](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/minikube%20service.png)

      ![Microservices Overview](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/minikube%20start%20pods.png)

      ![Microservices Overview](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/service.png)

2. **MongoDB**  
   ![MongoDB Setup](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/afterAddingFlightMD.png)

  ![MongoDB Setup](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/beforeMongo.png)




3. **Thunderclient Routes Testing**  
   ![Thunderclient Testing](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/gateway_getFlight.png)

   ![Thunderclient Testing](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/gateway_PostFlight.png)

      ![Thunderclient Testing](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/graphql_addingHotel.png)

      ![Thunderclient Testing](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/HotelSousse.png)



4. **Jenkins Configuration**  
   - **Jenkinsfile:**      ![JenkinsFile](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/jenkinsFile.png)
   - **Jenkins Application:**  ![JenkinsApp](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/jenkinsapp.png)

5. **Docker Configuration**
   - **Dockerfile:** ![DockerFile](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/dockerfile.png)
   - **Docker Hub:** ![Dockerhub](https://raw.githubusercontent.com/medaminehz/Miniprojet-Devops/main/screenshot/dockerhub.png)

## Additional Commands

Useful commands to manage the Kubernetes environment:

- `kubectl get pods`: List all running pods
- `kubectl apply -f <file>`: Apply changes using YAML file


