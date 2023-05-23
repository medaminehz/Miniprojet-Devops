const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');


const packageDefinition = protoLoader.loadSync('carRental.proto');
const carRentalProto = grpc.loadPackageDefinition(packageDefinition).carrental;

const client = new carRentalProto.CarRentalService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);


const request = {
  carName: 'mercedes',
  customerName: 'amine',
};

client.createCarRental(request, (error, response) => {
  if (error) {
    console.error('Error creating car rental:', error);
    return;
  }

  console.log('Car rental created successfully!');
  console.log('Rental ID:', response.rentalId);
});
