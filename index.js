const express = require("express");
const isMobile = require("./isMobile");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const mobile = isMobile(userAgent);
  res.send({ mobile });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
