const express = require("express");
const router = express.Router();

function shuffleArray(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    // Choose a random index from the remaining elements, excluding the current one (i)
    let j = i + Math.floor(Math.random() * (n - i - 1)) + 1;

    // Swap the elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

router.post("/", (req, res) => {
  const players = req.body;
  const santas = [...req.body];
  const secret = [];

  const shuffled = shuffleArray(santas);

  //   console.log("shuffled: ", shuffled);

  for (let i = 0; i < players.length; i++) {
    secret.push({ Recipient: players[i], Santa: shuffled[i] });
  }
  console.log(secret);
  res.json(secret);
});

module.exports = router;
