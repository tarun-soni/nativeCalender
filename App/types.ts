export type User = {
  id: number
  name: string
  username: string
  website: string
  phone: string
  email: string
}

export type RootState = {
  users: User[]
}

export type UserFetch = {
  success: boolean
  data: any
  error: boolean
}

export type myFirstReducerType = {
  users: User
}
