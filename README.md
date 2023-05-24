# miniprojet-api-
# Microservices Project

This project consists of three microservices: Flight Booking, Hotel Rental, and Car Rental. Each microservice handles a specific aspect of the travel booking process.There is a file gateway that integrate all services.
the first mico service(Flight Booking) : REST
the second micro service(Hotel Rental) :Graphql
the third micro service (Car Rental) : GRPC

## Prerequisites

- Node.js (version 16.16.0)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aminehz/miniprojet-api-
2.Install dependencies for each microservice:
- Flight Booking:
    ```bash
    cd flightBooking
    npm install
- Hotel rental:
    ```bash
    cd hotelsBooking
    npm install
- Car Rental:
  ```bash
    cd carRentalBooking
    npm install
## Usage:

1. Start each microservice:
  - Flight Booking:
    ```bash
    cd flightBooking
    npm start
  - Hotel rental:
    ```bash
    cd hotelsBooking
    npm start
    
  - Car Rental:
    ```bash
    cd carRentalBooking
    npm start
    
   - Gateway api:
     ```bash
     cd gateway
     npm start
    
    
2. Access the microservices via their respective endpoints:

- Flight Booking: http://localhost:3000
- Hotel Rental: http://localhost:4000
- Car Rental: http://localhost:50051

3. You can access to the microservices via  gateway : 
  - /flights': 'http://localhost:5000/flights',
  - '/createFlight': 'http://localhost:5000/createFlight',
  - '/updateFlight':  'http://localhost:5000/updateFlight/:flightId',
  - '/deleteFlight' :'http://localhost:5000/deleteFlight/:flightId',
  - '/graphql' :'http://localhost:5000/graphql',
  












