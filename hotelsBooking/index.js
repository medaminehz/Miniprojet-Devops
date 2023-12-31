
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const typeDefsPath = path.join(__dirname, 'typeDefs.js');
const typeDefs=require(typeDefsPath);
const resolvers=require('./hotelResolvers');

async function startServer() {
    const app = express();
  
    const server = new ApolloServer({ typeDefs, resolvers });
  
    await server.start();
  
    server.applyMiddleware({ app });
  
    const PORT = process.env.PORT || 4000;
  
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
  
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  }
  

  mongoose
    .connect('mongodb+srv://mohamedamineharzallah:aminehz@devops.hb9p1gm.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to the database');
      startServer();
    })
    .catch((err) => {
      console.error('Error connecting to the database:', err);
    });
  