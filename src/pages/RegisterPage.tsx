import React from "react";
import "../css/RegisterPage.css";
import MailIcon from "@mui/icons-material/Mail";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { useFormik } from "formik";
import { RegisterPageSchema } from "../schemas/RegisterPageSchema";
import TextField from "@mui/material/TextField";

export default function RegisterPage() {
  const { values, handleSubmit, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
