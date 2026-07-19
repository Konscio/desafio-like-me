const express = require("express");
const cors = require("cors");

const { getPosts, agregarPost, likePost, deletePost } = require("./consultas");

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

// Sumar likes
app.put("/posts/like/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const postActualizado = await likePost(id);

    if (!postActualizado) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    res.json(postActualizado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al dar like al post" });
  }
});

// Eliminar publicación
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const postEliminado = await deletePost(id);

    if (!postEliminado) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    res.json({ message: "Post eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el post" });
  }
});
