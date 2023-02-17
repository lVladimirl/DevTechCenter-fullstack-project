import * as React from "react";
import { State } from "../../interface";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { NavBar } from "../../components/navBar/navBar";
import { TechModal } from "../../components/techModal/techModal";
import { Tech } from "../../components/techs/techs";
import { ModalHandlerProps } from "../../interface";
import { SnackBarAlert } from "../../components/snackBarAlert/snackBarAlert";
import { api } from "../../utils/api";
import { login } from "../../store/userSlice";
import { getTech } from "../../store/techSlice";

export const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formType, setFormType] = useState<string>("");
  const [techData, setTechData] = useState<any>();

  const dispatch = useDispatch();
  const userRedux: any = useSelector((state) => state);
  const navigate = useNavigate();

  const [state, setState] = React.useState<State>({isOpenAlert: false,vertical: "top",horizontal: "right",ResponseType: "error",error: {status: 0,message:"error message"}, sucess:{message:"sucess message"}});
  const { vertical, horizontal, isOpenAlert, ResponseType, error, sucess } = state;

  const handleModal = ({ typeOfForm, techData }: ModalHandlerProps) => {
    if (typeOfForm) {
      setFormType(typeOfForm);
    }
    setIsOpen(!isOpen);
    setTechData(techData);
  };

  const handleClose = () => {
    setState({ ...state, isOpenAlert: false });
  };

  const fetchData = async () => {
    const response = await api.get("users/").catch((error) => error);
    if (response) {
      dispatch(login(response.data.profile));
      return response.data.profile;
    }
  };

  const fetchTech = async () => {
    const response = await api.get("technologies/").catch((error)=>error);
    if(response ){
      dispatch(getTech(response.data));
      return response.data
    }
  }

  useEffect(() => {
    const token = sessionStorage.getItem("@DTC-token")

    if(!token){
      navigate("/login")
    }
    if( token && !userRedux.user.name ){
      const autoLogin = fetchData();
    } 
    if ( token && !userRedux.tech.tech[0]){
      const getTech = fetchTech();
    }
  });

  return (
    <>
      <NavBar />
      <SnackBarAlert ResponseType={ResponseType} isOpenAlert={isOpenAlert} vertical={vertical} horizontal={horizontal} handleClose={handleClose} error={error} sucess={sucess} />
      <TechModal setState={setState} open={isOpen} handleModal={handleModal} type={formType} techData={techData} fetchTech={fetchTech} />
      <Header />
      <Tech handleModal={handleModal} />
    </>
  );
};
