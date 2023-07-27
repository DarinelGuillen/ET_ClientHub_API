import { Request, Response } from "express";

import { GetUsersUseCase } from "../../application/GetUsersUseCase";

export class GetAlertsController {
  constructor(readonly getUsersUseCase: GetUsersUseCase) { }

  async run(req: Request, res: Response) {
    try {
      const user = await this.getUsersUseCase.run();

      if (user)
        res.status(201).send({
          status: "success",
          data: {
            user
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible obtener las alertas",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
