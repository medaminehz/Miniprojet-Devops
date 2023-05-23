const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const routes = {
  '/flights': 'http://localhost:3000/flights',
  '/createFlight': 'http://localhost:3000/createFlight',
  '/updateFlight':  'http://localhost:3000/updateFlight/:flightId',
  '/graphql' :'http://localhost:4000/graphql',
  
};


for (const route in routes) {
  const target = routes[route];
  app.use(
    route,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        [`^${route}`]: '', 
      },
    })
  );
}


app.get('/trajets', (req, res) => {
  const targetURL = 'http://localhost:3000/flights'; 


  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});

app.post('/createFlight', (req, res) => {
  const targetURL = 'http://localhost:3000/createFlight';

  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});
app.put('/updateFlight',(req,res)=>{
const targetURL='http://localhost:3000/updateFlight/:flightId';
createProxyMiddleware({
  target: targetURL,
  changeOrigin: true,
})(req, res);
});

app.post('/graphql', (req, res) => {
  const targetURL = 'http://localhost:4000/graphql';

  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API gateway server listening on port ${PORT}`);
});
