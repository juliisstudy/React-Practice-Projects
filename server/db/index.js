const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("")
  .then(() => console.log("connect to db"))
  .catch((e) => console.log(e));
