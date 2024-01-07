const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const routes = {
  '/flights': 'http://192.168.49.2:30002/flights',
  '/createFlight': 'http://192.168.49.2:30002/createFlight',
  '/updateFlight':  'http://192.168.49.2:30002/updateFlight/:flightId',
  '/graphql' :  'http://192.168.49.2:30005/graphql',
  
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
  const targetURL = 'http://192.168.49.2:30002/flights'; 


  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});

app.post('/createFlight', (req, res) => {
  const targetURL = 'http://192.168.49.2:30002/createFlight';

  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});
app.put('/updateFlight',(req,res)=>{
const targetURL='http://192.168.49.2:30002/updateFlight/:flightId';
createProxyMiddleware({
  target: targetURL,
  changeOrigin: true,
})(req, res);
});

app.post('/graphql', (req, res) => {
  const targetURL = 'http://192.168.49.2:30005/graphql';

  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`API gateway server listening on port ${PORT}`);
});
