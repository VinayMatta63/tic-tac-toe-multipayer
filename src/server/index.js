const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const { spawn } = require("child_process");
  const pyProg = spawn("python", ["./pycheck.py"]);

  pyProg.stdout.on("data", function (data) {
    res.send(JSON.stringify(data.toString()));
  });
});

app.listen(4000, () => console.log("Application listening on port 4000!"));
