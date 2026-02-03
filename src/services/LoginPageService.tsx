import axios from "../config/AxiosConfig"
import { type AxiosResponse } from "axios";
import type { UserType } from "../types/Types";
class LoginPageService {
    login():Promise<UserType[]>{
        return new Promise((resolve:any, reject:any) => {
            axios.get("/users")
            .then((response: AxiosResponse<any,any>) => resolve(response.data))
            .catch((err:any) => reject(err));
        })
    }
}
export default new LoginPageService();