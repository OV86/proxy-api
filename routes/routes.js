const axios = require('axios');

const appRouter = (app) => {

  app.get("/", (req, res) => {
    res.status(200).send({ message: 'Placeholder REST proxy API' });
  });

  app.get("/posts", (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  app.get('*', function (req, res) {
    res.status(404).send({ message: 'invalid request, resource not found' });
  });
}

module.exports = appRouter;