export class Users {
  constructor(
    readonly id: number | undefined,
    readonly name: string | undefined,
    readonly last_name: string | undefined,
    readonly mother_last_name: string | undefined,
    readonly gender: string | undefined,
    readonly age: number | undefined,
    readonly street: string | undefined,
    readonly interior_number: number | undefined,
    readonly exterior_number: number | undefined,
    readonly neighborhood: string | undefined,
    readonly municipality: string | undefined,
    readonly state: string | undefined,
    readonly hobby: string | undefined,
    readonly destinations: string | undefined,
    readonly roomtype: string | undefined,
    readonly income: string | undefined,
    readonly trips: string | undefined,
    readonly books: string | undefined
  ) { }
}
