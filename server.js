const express = require("express");
const app = express();

app.use(express.json());

const helloWorld = require("./routes/helloWorld");
// const getSantaListById = require("./routes/getSantaListById");
const insertSantaListGame = require("./routes/insertSantaListGame");

app.use("/", helloWorld);
// app.use("/get-game", getSantaListById);
app.use("/insert-list", insertSantaListGame);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
