const express = require("express");
const { products } = require("./data");
const server = express();

server.get("/", (req, res) => {
  res.send("<h1> Home Page </h1><a href='/api/products'> Products</a>");
});

server.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

server.get("/api/product/:id", (req, res) => {
  const { id } = req.params;
  console.log("🚀 ~ file: app.js ~ line 19 ~ server.get ~ id", id);
  // id = id.

  const singleProduct = products.find((product) => product.id === Number(id));
  if (!singleProduct) {
    return res.status(404).send("This product does not exist");
  }
  return res.status(200).json(singleProduct);
});

server.get("/api/query", (req, res) => {
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched your search");
    return res.status(200).json({ success: true, data: sortedProducts });
  }

  res.status(200).json(sortedProducts);
  res.send("annyeong");
});

server.listen(5000, () => {
  console.log("Server started on port 5000 ✔");
});
