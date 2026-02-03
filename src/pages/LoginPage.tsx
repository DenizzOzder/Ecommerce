import React from "react";
import { type UserType } from "../types/Types";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { RegisterPageSchema } from "../schemas/RegisterPageSchema";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "../css/LoginPage.css"
import LoginPageService from "../services/LoginPageService";
import { useDispatch } from "react-redux";
import { setCurrentUser, setLoading } from "../redux/appSlice"

interface CheckUserType{
  result:boolean,
  currentUser:UserType | null
}
export default function LoginPage() {
  const navigate = useNavigate();

    const handleClear = () => {
      resetForm();
    };
    const dispatch = useDispatch();
    const checkUser = (userList:UserType[], username:string,password:string):CheckUserType => {
      const response: CheckUserType = {result: false,currentUser: null}
      userList.forEach((user: UserType) => {
        if(user.username === username && user.password === password){
          response.result = true;
          response.currentUser=user
        }
      })
      return response;
    }
    const submit = async (values: any, actions: any) => {
      try {
        dispatch(setLoading(true));
        const response: UserType[] = await LoginPageService.login();
        if ( response ){
         const checkResponse:CheckUserType = checkUser(response,values.username,values.password)
          if(checkResponse.result && checkResponse.currentUser){
            dispatch(setCurrentUser(checkResponse.currentUser));
            localStorage.setItem("currentUser", JSON.stringify(checkResponse.currentUser))
            toast.success("Giriş Başarılı")
            navigate("/")
          }
          else{
            toast.error("HATALI")
          }
        }
        } catch (error) {
        console.error("Login Failed:", error);
        toast.error("Giriş yapma başarızı oldu. Lütfen tekrar deneyin.");
       
      }finally{
        dispatch(setLoading(false));
      }
    };
  const { values, handleSubmit, handleChange, errors, resetForm } = useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      onSubmit: submit,
      validationSchema: RegisterPageSchema,
    });
    
  return (
      <div className="login">
        <div className="formWrapper">
          <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
              <TextField
                className="formInput"
                placeholder="Kullanıcı Adı"
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
              />
              <span>{errors.username && errors.username}</span>
              <TextField
                className="formInput"
                name="email"
                placeholder="E-posta"
                value={values.email}
                type="email"
                onChange={handleChange}
              />
              <span>{errors.email ? errors.email : null}</span>
              <TextField
                className="formInput"
                placeholder="Şifre"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <span>{errors.password && errors.password}</span>
            </div>
            <div className="buttonWrapper">
              <Button variant="contained" id="registerBtn" type="submit">
                Kayıt Ol
              </Button>
              <Button variant="contained" id="clearBtn" onClick={handleClear}>
                Temizle
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
}
