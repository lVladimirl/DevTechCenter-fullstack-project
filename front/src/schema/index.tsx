import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  name: yup.string().required("Esse campo é obrigatório"),
  email: yup.string().required("Required field!").email("invalid email"),
  password: yup
    .string()
    .required("Esse campo é obrigatório")
    .min(8, "no minimo 8 caracteres"),
  confirmPassword: yup.string().required("Esse campo é obrigatório"),
  bio: yup.string().required("Esse campo é obrigatório"),
  contact: yup.string().required("Esse campo é obrigatório"),
  status: yup.string().required("Esse campo é obrigatório"),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Required field!").email("invalid email"),
  password: yup
    .string()
    .required("Esse campo é obrigatório")
    .min(8, "no minimo 8 caracteres"),
});


export const TechSchema = yup.object().shape({
  Techname: yup.string().required("Esse campo é obrigatório"),
  Techstatus: yup.string().required("Esse campo é obrigatório"),
});