import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../application/UpdateUserUseCase";

export class UpdateUserController {
  constructor(readonly updateAlertsUseCase: UpdateUserUseCase) {}

  async run(req: Request, res: Response) {
    const { data } = req.body;  
    console.log(`🤨😶🤐|| 🥓 file: UpdateUserController.ts:9 🥓 UpdateUserController 🥓 run 🥓 data||`, data)

    try {
      const user = await this.updateAlertsUseCase.run(  data);  
      console.log(`🤨😶🤐|| 🥓 file: UpdateUserController.ts:11 🥓 UpdateUserController 🥓 run 🥓 user||`, user);

      if (user) {
        res.status(201).send({
          status: "success",
          data: {
            user,
          },
        });
      } else {
        res.status(204).send({
          status: "error",
          data: "NO fue posible actualizar la alerta",
        });
      }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrió un error",
        msn: error,
      });
    }
  }
}
