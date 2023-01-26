import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "../../interface";
import { LoginSchema } from "../../schema";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ setState }: any) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = handleSubmit((data) => {
    // if(axios request == error)
    // if (response.status !== 201) {
    //   setState({
    //     isOpenAlert: true,
    //     vertical: "top",
    //     horizontal: "right",
    //     ResponseType: "error",
    //   });
    // } else {
    //  setState({
    //   isOpenAlert: true,
    //   vertical: "top",
    //   horizontal: "right",
    //   ResponseType: "error",
    //   error: {
    //     status: respose.status,
    //     message:response.message,
    //   }
    // });
    // }
  });

  const sendToRegister = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/registro");
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Registro</h2>
      <Input
        label="email"
        type="text"
        placeholder="pedrinho@gmail"
        errors={errors?.email?.message}
        {...register("email")}
      ></Input>
      <Input
        label="senha"
        type="text"
        placeholder="pedrinho123"
        errors={errors?.password?.message}
        {...register("password")}
      ></Input>
      <Button
        type="submit"
        variant="default"
        variant_hover="default_hover"
        size="large"
      >
        {"Login"}
      </Button>
      <span>Não possui conta?</span>
      <Button
        type="button"
        variant="disable"
        variant_hover="disable_hover"
        size="large"
        onClick={(e) => sendToRegister(e)}
      >
        {" "}
        Cadastre-se
      </Button>
    </form>
  );
};
