import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { FormBox } from "./style";

export const Login = () => {
  const navigate = useNavigate();

  const sendToRegister = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/registro");
  };

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send info to yup");
  };

  return (
    <>
      <FormBox>
        <h1>BrandName</h1>
        <form onSubmit={(e) => hadleSubmit(e)}>
          <h2>Login</h2>
          <Input
            label="email"
            type="text"
            placeholder="pedrinho@gmail"
            errors="errinho"
          ></Input>
          <Input
            label="senha"
            type="text"
            placeholder="pedrinho123"
            errors="errinho"
          ></Input>
          <Button
            type="submit"
            variant="default"
            variant_hover="default_hover"
            size="large"
          >
            {" "}
            Entrar
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
      </FormBox>
    </>
  );
};
