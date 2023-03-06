const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Express JS");
});
app.listen(3000);
module.exports = app;

//An Express instance should be exported from the 'app.js' file using the default export syntax
//Send 'Express JS' text as a response for the request with path '/'
