import express from "express";
import { Signale } from "signale";
const cors = require("cors");

import { userRouter } from "./users/infrastructure/UserRouter";

const app = express();
const signale = new Signale();

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
