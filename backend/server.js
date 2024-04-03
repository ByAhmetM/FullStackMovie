const http = require("http");
const getRequest = require("./methods/get-request");
const deleteRequest = require("./methods/delete-request");
const postRequest = require("./methods/post-request");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  switch (req.method) {
    case "OPTIONS":
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.end();
      break;
    case "GET":
      getRequest(req, res);
      break;
    case "POST":
      postRequest(req, res);
      break;
    case "DELETE":
      deleteRequest(req, res);
      break;
    default:
      console.log("Yol bulunamadı");
  }
});

const port = 5001;
server.listen(port, () => {
  console.log(`Server ${port}a gelen istekleri dinlemeye başladı`);
});
