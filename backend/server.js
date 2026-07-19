const express = require("express");
const cors = require("cors");

const { getPosts, agregarPost } = require("./consultas");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor levantado en puerto 3000");
});

// Obtener publicaciones
app.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Agregar publicación
app.post("/posts", async (req, res) => {
  try {
    const post = req.body;

    await agregarPost(post);

    res.send("Post agregado correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
