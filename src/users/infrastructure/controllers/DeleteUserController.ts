import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../application/DeleteUserUseCase";

export class DeleteUserController {
    constructor(readonly deleteUserUseCase: DeleteUserUseCase) { }

    async run(req: Request, res: Response) {
        const Id = req.params.id;
        try {
            const user = await this.deleteUserUseCase.run(Number(Id));
            if (user) {
                res.status(200).send({
                    status: "success",
                    data: {
                        user,
                    },
                });
            } else {
                res.status(204).send({
                    status: "error",
                    data: "User not found",
                });
            }
        } catch (error) {
            res.status(500).send({
                status: "error",
                data: "An error occurred while deleting user",
                msn: error,
            });
        }
    }
}
