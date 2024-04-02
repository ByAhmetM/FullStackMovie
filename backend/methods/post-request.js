const fs = require("fs");
const crypto = require("crypto");
const bodyParser = require("../utils/body-parser");
module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      let body = await bodyParser(req);

      if (!body.title || !body.year || !body.genre || !body.rating) {
        res.writeHead(404);
        return res.end("Lütfen filmin bütün alanlarını tanımlayınız");
      }

      body.id = crypto.randomUUID();

      let data = fs.readFileSync("./data/movies.json", "utf-8");
      data = JSON.parse(data);

      data.movies.push(body);

      fs.writeFileSync("./data/movies.json", JSON.stringify(data));

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(body));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Yol bulunamadı" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("URL Yanlış");
  }
};
