const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const app = express();

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.webcrypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

app.use(cors());

app.use("/login", (req, res) => {
  var token = uuidv4();

  res.send({
    token: token,
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
