import { Text, Heading, Flex, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory();

  function getToken() {
    const token = localStorage.getItem("userToken");
    return token;
  }

  function logoutUser(){
    localStorage.clear();
    history.push("/login");
  }

  function renderHome() {
    return (
      <>
        <h1>Home</h1>
        <Button onClick={logoutUser}>Logout</Button>
      </>
    );
  }

  function renderAskLogin() {
    //Função que renderiza um modal de ir à tela de login caso não tenha token
    return (
      <>
        <h1>Por favor, realize seu login.</h1>
      </>
    );
  }

  return <>{getToken() !== null ? renderHome() : renderAskLogin()}</>;
}
