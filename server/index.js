const express = require("express");
const cors = require("cors");
const blogRouter = require("./route/blog-route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => console.log("app is running at 5000..."));
