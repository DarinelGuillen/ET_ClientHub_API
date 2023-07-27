import { Users } from "../domain/users";
import { UserRepository } from "../domain/UserRepository";

export class UpdateUserUseCase {
  constructor(readonly userRepository: UserRepository) { }

  async run(data: Partial<Users>): Promise<Users | null> {
    try {
      const user = await this.userRepository.updateUser(data);
      return user;
    } catch (error) {
      return null;
    }
  }
}
