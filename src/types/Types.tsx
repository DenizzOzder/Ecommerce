export interface UserType {
  username: string;
  id:string;
  email: string;
  password: string;
  balance:number;
}

export interface ProductType{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  rating: RatingType
  image: string
}
export interface RatingType{
  rate:number,
  count:number
}