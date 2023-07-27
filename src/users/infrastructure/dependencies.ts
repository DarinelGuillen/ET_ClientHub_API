import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetUsersUseCase } from "../application/GetUsersUseCase";
import { UpdateUserUseCase } from "../application/UpdateUserUseCase";
import { DeleteUserUseCase } from "../application/DeleteUserUseCase";  
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAlertsController } from "./controllers/GetUsersControllers";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";  
import { MysqlAlertRepository } from "./MysqlAlertRepository";

export const mysqlAlertRepository = new MysqlAlertRepository();

export const createAlertUseCase = new CreateUserUseCase(mysqlAlertRepository);
export const createUserController = new CreateUserController(createAlertUseCase);

export const getUsersUseCase = new GetUsersUseCase(mysqlAlertRepository);
export const getAlertsController = new GetAlertsController(getUsersUseCase);

export const updateAlertsUseCase = new UpdateUserUseCase(mysqlAlertRepository);
export const updateUserController = new UpdateUserController(updateAlertsUseCase);

export const deleteUserUseCase = new DeleteUserUseCase(mysqlAlertRepository);  
export const deleteUserController = new DeleteUserController(deleteUserUseCase);  
