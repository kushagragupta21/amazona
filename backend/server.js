import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Db connection success");
  } catch (err) {
    console.log(err.message);
    // process.exit(1)
  }
};

  connectToDb();


app.use("/api/users", userRouter);
app.use("/api/products",productRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
