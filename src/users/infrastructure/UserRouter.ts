import express from "express";
import { createUserController, updateUserController, getAlertsController, deleteUserController } from "./dependencies";

export const userRouter = express.Router();

userRouter.post("/", createUserController.run.bind(createUserController));

userRouter.get("/", getAlertsController.run.bind(getAlertsController));

userRouter.put("/", updateUserController.run.bind(updateUserController));

userRouter.put("/", deleteUserController.run.bind(deleteUserController));

userRouter.delete("/:id", deleteUserController.run.bind(deleteUserController));
