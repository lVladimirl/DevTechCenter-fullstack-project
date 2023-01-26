import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterFormValues } from "../../interface";
import { SignupSchema } from "../../schema";

export const RegisterForm = ({ setState }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(SignupSchema),
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

  return (
    <form onSubmit={onSubmit}>
      <h2>Registro</h2>
      <Input
        label="nome"
        type="text"
        placeholder="pedrinho"
        errors={errors?.name?.message}
        {...register("name")}
      ></Input>
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
      <Input
        label="confirmar senha"
        type="text"
        placeholder="pedrinho123"
        errors={errors?.confirmPassword?.message}
        {...register("confirmPassword")}
      ></Input>
      <Input
        label="bio"
        type="text"
        placeholder="javascript is good, java is evil."
        errors={errors?.bio?.message}
        {...register("bio")}
      ></Input>
      <Input
        label="contato"
        type="text"
        placeholder="12345678"
        errors={errors?.contact?.message}
        {...register("contact")}
      ></Input>
      <Input
        label="status"
        type="text"
        placeholder="juior dev, pleno, senior"
        errors={errors?.status?.message}
        {...register("status")}
      ></Input>
      <Button
        type="submit"
        variant="default"
        variant_hover="default_hover"
        size="large"
      >
        {"Cadastrar"}
      </Button>
    </form>
  );
};
