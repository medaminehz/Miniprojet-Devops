const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Load the generated protobuf definition
const packageDefinition = protoLoader.loadSync('carRental.proto');
const carRentalProto = grpc.loadPackageDefinition(packageDefinition).carrental;

// Implement the gRPC service
const createCarRental = (call, callback) => {
  const { carName, customerName } = call.request;
  // Logic to create a car rental
  const rentalId = '123456'; // Generate a unique rental ID

  // Prepare the response
  const response = {
    rentalId: rentalId,
  };

  // Send the response
  callback(null, response);
};

// Create a gRPC server
const server = new grpc.Server();
server.addService(carRentalProto.CarRentalService.service, {
  createCarRental: createCarRental,
});

// Start the server
const port = 50051;
server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
console.log(`Server running on port ${port}`);
server.start();
