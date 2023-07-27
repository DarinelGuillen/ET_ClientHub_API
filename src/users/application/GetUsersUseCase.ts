import { Users } from "../domain/users";
import { UserRepository } from "../domain/UserRepository";

export class GetUsersUseCase {
  constructor(readonly userRepository: UserRepository) { }

  async run(): Promise<Partial<Users>[] | null> {
    try {
      const user = await this.userRepository.getUsers( );
      return user;
    } catch (error) {
      return null;
    }
  }

}