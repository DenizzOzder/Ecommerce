import React from "react";
import "../css/RegisterPage.css";
import { type UserType } from "../types/Types";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { RegisterPageSchema } from "../schemas/RegisterPageSchema";
import TextField from "@mui/material/TextField";
import RegisterPageService from "../services/RegisterPageService";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const submit = async (values: any, actions: any) => {
    try {
      const payload: UserType = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      await RegisterPageService.register(payload);
      actions.resetForm();
      if (payload) {
        toast.success("Kayıt işlemi başarılı!");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.");
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
  const handleClear = () => {
    resetForm();
  };

  return (
    <div className="register">
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
