import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";

export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) { }

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const user = await this.createUserUseCase.run(
        data.name,
        data.last_name,
        data.mother_last_name,
        data.gender,
        data.age,
        data.street,
        data.interior_number,
        data.exterior_number,
        data.neighborhood,
        data.municipality,
        data.state,
        data.hobby,
        data.destinations,
        data.roomtype,
        data.income,
        data.trips,
        data.books
      );

      if (user) {
        res.status(201).send({
          status: "success",
          data: {
            id: user.id,
            name: user.name,
            last_name: user.last_name,
            mother_last_name: user.mother_last_name,
            gender: user.gender,
            age: user.age,
            street: user.street,
            interior_number: user.interior_number,
            exterior_number: user.exterior_number,
            neighborhood: user.neighborhood,
            municipality: user.municipality,
            state: user.state,
            hobby: user.hobby,
            destinations: user.destinations,
            roomtype: user.roomtype,
            income: user.income,
            trips: user.trips,
            books: user.books,
          },
        });
      } else {
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
      }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
