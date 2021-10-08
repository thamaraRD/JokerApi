const JokesController = require("../controllers/Jokes.controller");

module.exports = app => {
app.get("/api/Jokes/", JokesController.findAllJokes);
app.get("/api/Jokes/:id", JokesController.findOneSingleJokes);
app.put("/api/Jokes/update/:id", JokesController.updateExistingJokes);
app.post("/api/Jokes/new", JokesController.createNewJokes);
app.delete("/api/Jokes/delete/:id", JokesController.deleteAnExistingJokes);
};