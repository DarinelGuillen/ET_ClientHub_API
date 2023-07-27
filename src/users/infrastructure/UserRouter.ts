import express from "express";

import { createUserController, updateUserController } from "./dependencies";
import { getAlertsController } from "./dependencies";

export const userRouter = express.Router();

userRouter.post("/", createUserController.run.bind(createUserController));

userRouter.get("/", getAlertsController.run.bind(getAlertsController));

userRouter.put("/", updateUserController.run.bind(updateUserController));
