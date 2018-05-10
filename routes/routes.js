const axios = require('axios');

// setup basic routing
const appRouter = (app) => {

  app.get("/", (req, res) => {
    res.status(200).send({ message: 'Placeholder REST proxy API' });
  });
  // fetch posts from jsonplaceholder and return response data
  app.get("/posts", (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  // return 404 in case the route is not found
  app.get('*', function (req, res) {
    res.status(404).send({ message: 'invalid request, resource not found' });
  });
}

module.exports = appRouter;