import axios, { type AxiosResponse } from "axios";
import type { ProductType } from "../types/Types";
class ProductService{
    BASE_URL = "http://fakestroeapi.com"
    getAllProducts():Promise<ProductType[]>{
    //localhost/products --> Ürünler
    //fakestoreapi/products --> Apiden gelen
        return new Promise((resolve: any,reject: any) => {
            axios.get(`${this.BASE_URL}/products`)
            .then((response:AxiosResponse<any,any>) => resolve(response.data)).catch((error:any) => reject(error));
        })
}
}
export default new ProductService();