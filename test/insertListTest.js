const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server"); // Adjust the path to where your Express app is exported
const expect = chai.expect;

chai.use(chaiHttp);

describe("/POST santaList", () => {
  it("it should display a list of Recipient and Santas with 1000 players", () => {
    let players = [];
    for (let i = 1; i <= 1000; i++) {
      players.push(i);
    }
    chai
      .request(server)
      .post("/insert-list")
      .send(players)
      .end((err, res) => {
        expect(res.body).to.be.an("array");
        expect(res.body.length).to.equal(1000);
        expect(players.length).to.equal(1000);
      });
  });
});
