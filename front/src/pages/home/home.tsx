import { useState } from "react";
import { Header } from "../../components/header/header";
import { NavBar } from "../../components/navBar/navBar";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpenModal() {
    setIsOpen(true);
  }

  return (
    <>
      <NavBar />
      <Header />
      {/* <MainContainer/>
    <LeilaoContainer isDashBoard={false}/>
    <CarrosContainer isDashBoard={false}/>
    <MotosContainer isDashBoard={false}/>
    <Footer /> */}
    </>
  );
};
