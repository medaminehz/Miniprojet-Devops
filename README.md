# DevOps Mini Project with Kubernetes

This project demonstrates a DevOps setup using Kubernetes to deploy microservices - Car Rental Booking, Flight Booking, and Hotels Booking, along with a Gateway to handle service routing.

## Services Overview

### Car Rental Booking Service

- **Access:** [http://192.168.49.2:30001/carRental](http://192.168.49.2:30001/carRental)
- **Routes:**
  - `/cars`: Get all cars
  - `/createCar`: Create a new car entry

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
    - Car Rental Booking: [http://192.168.49.2:30001/carRental](http://192.168.49.2:30001/carRental)
    - Flight Booking: [http://192.168.49.2:30001/flights](http://192.168.49.2:30001/flights)
    - Hotels Booking (GraphQL): [http://192.168.49.2:30001/graphql](http://192.168.49.2:30001/graphql)

## Screenshots

1. **Microservices Overview**  
   ![Microservices Overview](path/to/microservices_screenshot.png)

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

## Contributing

Feel free to contribute by opening issues or pull requests. Provide any feedback, suggestions, or bug reports.

## License

This project is licensed under the [MIT License](LICENSE).
