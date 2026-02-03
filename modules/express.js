const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
const port = 8080;

app.use(express.json());
// Middleware para logar o corpo da requisicao
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  next();
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Erro ao buscar usuarios:" + error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Erro ao buscar usuarios:" + error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("Erro ao criar usuário: " + error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Erro ao atualizar usuário: " + error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Erro ao deletar usuario: " + error.message);
  }
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));
