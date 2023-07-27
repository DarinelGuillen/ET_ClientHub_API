import { Users } from "./users";

export interface UserRepository {
  createUser(
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
  ): Promise<Users | null>;

  getUsers(): Promise<Partial<Users>[] | null>;

  updateUser( data: Partial<Users>): Promise<Users | null>;
}
