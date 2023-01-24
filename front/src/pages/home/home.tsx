import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { NavBar } from "../../components/navBar/navBar";
import { TechModal } from "../../components/techModal/techModal";
import { Tech } from "../../components/techs/techs";
import { ModalHandlerProps } from "../../interface";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<string>("");
  const [techData, setTechData] = useState<any>();
  
  const state: any = useSelector((state) => state);
  const navigate = useNavigate();

  const handleModal = ({ typeOfForm, techData }: ModalHandlerProps) => {
    if (typeOfForm) {
      setFormType(typeOfForm);
    }
    setIsOpen(!isOpen);
    setTechData(techData)
  };

  useEffect(() => {
    if (state.user.user === "") {
      navigate("/login");
    }
  });

  return (
    <>
      <NavBar />
      <TechModal open={isOpen} handleModal={handleModal} type={formType} techData={techData} />
      <Header />
      <Tech handleModal={handleModal} />
    </>
  );
};
