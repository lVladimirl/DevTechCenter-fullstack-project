import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { api } from "../../utils/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../schema";
import { RegisterFormValues } from "../../interface";

export const RegisterForm = ({ setState }: any) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    if (data.password === data.confirmPassword) {
      const userData = { name: data.name, email: data.email, password: data.password, bio: data.bio, contact: data.contact, status: data.status };
      const response = await api
        .post("users/register", userData)
        .catch((error) => error);
      if (response.status === 201) {
        setState({ isOpenAlert: true, vertical: "top", horizontal: "right", ResponseType: "sucess", sucess:{message:"Cadastro Realizado"}});

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      
      } else {
        setState({ isOpenAlert: true, vertical: "top", horizontal: "right", ResponseType: "error", error: { status: response.response.status, message: response.response.data.message} });
      }
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <h2>Registro</h2>
      <Input label="nome" type="text" placeholder="pedrinho" errors={errors?.name?.message} {...register("name")}></Input>
      <Input label="email" type="text" placeholder="pedrinho@gmail" errors={errors?.email?.message} {...register("email")}></Input>
      <Input label="senha" type="text" placeholder="pedrinho123" errors={errors?.password?.message} {...register("password")}></Input>
      <Input label="confirmar senha" type="text" placeholder="pedrinho123" errors={errors?.confirmPassword?.message} {...register("confirmPassword")}></Input>
      <Input label="bio" type="text" placeholder="javascript is good, java is evil." errors={errors?.bio?.message} {...register("bio")}></Input>
      <Input label="contato" type="text" placeholder="12345678" errors={errors?.contact?.message} {...register("contact")}></Input>
      <Input label="status" type="text" placeholder="juior dev, pleno, senior" errors={errors?.status?.message} {...register("status")}></Input>
      <Button type="submit" variant="default" variant_hover="default_hover" size="large">
        {"Cadastrar"}
      </Button>
    </form>
  );
};
