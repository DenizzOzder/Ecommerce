import * as yup from "yup";
export const RegisterPageSchema = yup.object().shape({
  username: yup.string().required("Kullanıcı adı zorunludur"),
  email: yup
    .string()
    .email("Geçersiz e-posta adresi")
    .required("E-posta zorunludur"),
  password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre zorunludur"),
});
