export type User = {
  id: number
  name: string
  username: string
  website: string
  phone: string
  email: string
}

export type UserFetch = {
  success: boolean
  data: any
  error: boolean
}
