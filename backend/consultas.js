const pool = require("./connection");

const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts ORDER BY id");
  return rows;
};

const agregarPost = async ({ titulo, url, descripcion }) => {
  const consulta = `
    INSERT INTO posts
    (titulo, img, descripcion, likes)
    VALUES ($1, $2, $3, 0)
    RETURNING *;
  `;

  const values = [titulo, url, descripcion];

  const { rows } = await pool.query(consulta, values);

  return rows[0];
};

const likePost = async (id) => {
  const consulta = `
    UPDATE posts
    SET likes = likes + 1
    WHERE id = $1
    RETURNING *;
  `;

  const values = [id];

  const { rows } = await pool.query(consulta, values);

  return rows[0];
};

const deletePost = async (id) => {
  const consulta = `
    DELETE FROM posts
    WHERE id = $1
    RETURNING *;
  `;

  const values = [id];

  const { rows } = await pool.query(consulta, values);

  return rows[0];
};

module.exports = {
  getPosts,
  agregarPost,
  likePost,
  deletePost,
};
