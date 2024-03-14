export interface IAvatarStore {
  avatar: string;
  diamond: number;
}

export interface ILogin {
  email: string
  family_name: string
  given_name: string
  id: string
  locale: string
  name: string
  picture: string
  verified_email: boolean 
}