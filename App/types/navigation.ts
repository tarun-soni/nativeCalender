export type AllScreenParamList = {
  limit: number
}
export type HomeStackParamList = {
  HomeScreen: undefined
  UserScreen: undefined
  PostScreen: {
    limit: number
  }
}
export type AuthStackParamList = {
  Login: undefined
  CreateAccount: undefined
}

export interface RootStackParamList
  extends HomeStackParamList,
    AuthStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
