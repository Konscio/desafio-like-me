# Desafío Like Me - Parte I

Aplicación full stack desarrollada con React, Node.js, Express y PostgreSQL.  
Permite registrar y visualizar publicaciones en una red social llamada "Like Me".

## Tecnologías utilizadas

- React
- Vite
- Node.js
- Express
- PostgreSQL
- pg
- CORS
- Axios

## Base de datos

Crear la base de datos y la tabla en PostgreSQL:

```sql
CREATE DATABASE likeme;

CREATE TABLE posts (
  id SERIAL,
  titulo VARCHAR(25),
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT
);
```

## Instalación

### Backend

```bash
cd backend
npm install
node server.js
```

El backend se ejecuta en:

```plaintext
http://localhost:3000
```

### Frontend

Abrir otra terminal:

```bash
cd frontend
npm install
npm run dev
```

El frontend se ejecuta en:

```plaintext
http://localhost:5173
```

## Rutas implementadas

### Obtener posts

```http
GET /posts
```

Devuelve todos los posts registrados en PostgreSQL.

### Crear post

```http
POST /posts
```

Ejemplo de body:

```json
{
  "titulo": "arbolito",
  "url": "https://images.unsplash.com/...",
  "descripcion": "arbol"
}
```

## Autor

Sebastián Cabrera
