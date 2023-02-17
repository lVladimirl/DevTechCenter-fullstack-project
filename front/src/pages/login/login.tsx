import * as React from "react";
import { State } from "../../interface";
import { FormBox } from "./style";
import { SnackBarAlert } from "../../components/snackBarAlert/snackBarAlert";
import { LoginForm } from "../../components/loginForm/loginForm";

export const Login = () => {
  const [state, setState] = React.useState<State>({
    isOpenAlert: false,
    vertical: "top",
    horizontal: "right",
    ResponseType: "error",
    error: {
      status: 0,
      message:"error message",
    },
    sucess:{
      message:"sucess message"
    }
  });
  const { vertical, horizontal, isOpenAlert, ResponseType, error, sucess } = state;

  const handleClose = () => {
    setState({ ...state, isOpenAlert: false });
  };

  return (
    <>
      <SnackBarAlert
        ResponseType={ResponseType}
        isOpenAlert={isOpenAlert}
        vertical={vertical}
        horizontal={horizontal}
        handleClose={handleClose}
        error={error}
        sucess={sucess}
      />
      <FormBox>
        <h1>BrandName</h1>
        <LoginForm setState={setState} />
      </FormBox>
    </>
  );
};
