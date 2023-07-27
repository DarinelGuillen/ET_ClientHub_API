import { query } from "../../database/mysql";
import { Users } from "../domain/users";
import { UserRepository } from "../domain/UserRepository";

export class MysqlAlertRepository implements UserRepository {
  async getUsers(): Promise<Users[] | null> {
    const sql ="SELECT u.*, a.*, p.* FROM users u LEFT JOIN address a ON u.id = a.id_user LEFT JOIN preferences p ON u.id = p.id_user";
    const params: any[] = [];

    try {
      const [data]: any = await query(sql, params);
      const usersData = data;
      const users: Users[] = usersData.map((userData: any) => {
        const {
          id,
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
          books,
        } = userData;

        return {
          id,
          name,
          last_name,
          mother_last_name,
          gender,
          age,
          address: {
            street,
            interior_number,
            exterior_number,
            neighborhood,
            municipality,
            state,
          },
          preferences: {
            hobby,
            destinations,
            roomtype,
            income,
            trips,
            books,
          },
        };
      });

      return users;
    } catch (error) {
      return null;
    }
  }

  async createUser(
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
    const createUserSql = "INSERT INTO users (name, last_name, mother_last_name, gender, age) VALUES (?, ?, ?, ?, ?)";
    const createAddress =  "INSERT INTO address (id_user, street, interior_number, exterior_number, neighborhood, municipality, state) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const createPreferences = "INSERT INTO preferences (id_user, hobby, destinations, roomtype, income, trips, books) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
    const createUserParams: any[] = [
      name,
      last_name,
      mother_last_name,
      gender,
      age
    ];
    
  
    try {
      const [userResult]: any = await query(createUserSql, createUserParams);
  
      const userId = userResult.insertId;
  
      const createAddressParams: any[] = [
        userId, 
        street,
        interior_number,
        exterior_number,
        neighborhood,
        municipality,
        state
      ];
      const createPreferencesParams: any[] = [
        userId, 
        hobby,
        destinations,
        roomtype,
        income,
        trips,
        books
      ];
  
      await query(createAddress, createAddressParams);
      await query(createPreferences, createPreferencesParams);
  
      return new Users(
        userId,
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
    } catch (error) {
      console.error("Error in createUser:", error);
      return null;
    }
  }
  
  
  

  async updateUser(data: Partial<Users>): Promise<Users | null> {
    try {
      const updateUserSql =
        "UPDATE users SET name=?, last_name=?, mother_last_name=?, gender=?, age=? WHERE id=?";
      const updateUserParams: any[] = [
        data.name,
        data.last_name,
        data.mother_last_name,
        data.gender,
        data.age,
        data.id,  
      ];
  
      const updateAddressSql =
        "UPDATE address SET street=?, interior_number=?, exterior_number=?, neighborhood=?, municipality=?, state=? WHERE id_user=?";
      const updateAddressParams: any[] = [
        data.street,
        data.interior_number,
        data.exterior_number,
        data.neighborhood,
        data.municipality,
        data.state,
        data.id,  
      ];
  
      const updatePreferencesSql =
        "UPDATE preferences SET hobby=?, destinations=?, roomtype=?, income=?, trips=?, books=? WHERE id_user=?";
      const updatePreferencesParams: any[] = [
        data.hobby,
        data.destinations,
        data.roomtype,
        data.income,
        data.trips,
        data.books,
        data.id,  
      ];
  
      const updatePromises = [
        query(updateUserSql, updateUserParams),
        query(updateAddressSql, updateAddressParams),
        query(updatePreferencesSql, updatePreferencesParams),
      ];
      
  
      const [
        updateUserResult,
        updateAddressResult,
        updatePreferencesResult,
      ] = await Promise.all(updatePromises);
  
     
  
      return new Users(
        data.id,
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
    } catch (error) {
      return null;
    }
  }
  
  

}
