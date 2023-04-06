export type UsersType = {
  id: number,
  name: string
}
export const db: DBType = {
  users: [
    {id: 1, name: 'Yula'},
    {id: 2, name: 'Vitya'},
    {id: 3, name: 'Masha'},
    {id: 4, name: 'Vadim'}
  ]
}

export type DBType = { users: UsersType[] }
