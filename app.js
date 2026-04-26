const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    status: "Application is running",
    version: "v1"
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
