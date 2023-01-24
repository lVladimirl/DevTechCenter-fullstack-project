import * as React from "react";
import { ReactElement } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { State } from "../../interface";

export interface SnackBarProp extends State  {
    handleClose:() => void;
    isOpenAlert: boolean;
    error?: {
        status?: number;
        message?: string;
    }
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBarAlert = ({isOpenAlert, vertical, horizontal, handleClose }:SnackBarProp ): ReactElement => {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={isOpenAlert}
      onClose={handleClose}
      message="I love snacks"
      key={vertical + horizontal}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        This is an error message!
      </Alert>
      {/* <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert> */}
    </Snackbar>
  );
};
