import { UserRepository } from "../domain/UserRepository";

export class DeleteUserUseCase {
    constructor(readonly userRepository: UserRepository) { }

    async run(userId: number): Promise<Boolean | null> {
        try {
            const user = await this.userRepository.deleteUser(userId);
            return user;
        } catch (error) {
            return null;
        }
    }
}
