import { Users } from "../domain/users";
import { UserRepository } from "../domain/UserRepository";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository) { }

  async run(
    name: string,
    last_name: string,
    mother_last_name: string,
    gender: string,
    age: number,
    street: string,
    interior_number: number,
    exterior_number: number,
    neighborhood: string,
    municipality: string,
    state: string,
    hobby: string,
    destinations: string,
    roomtype: string,
    income: string,
    trips: string,
    books: string
  ): Promise<Users | null> {
    try {
      const user = await this.userRepository.createUser(
        name,
        last_name,
        mother_last_name,
        gender,
        age,
        street,
        interior_number,
        exterior_number,
        neighborhood,
        municipality,
        state,
        hobby,
        destinations,
        roomtype,
        income,
        trips,
        books
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
