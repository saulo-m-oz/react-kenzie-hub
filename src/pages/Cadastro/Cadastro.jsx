import { Text, Heading, Flex, Button, Box } from "@chakra-ui/react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function Cadastro() {
  const history = useHistory();

  function redirectLogin() {
    history.push("/login");
  }

  return (
    <Flex
      p="3"
      textAlign="center"
      flexDirection="column"
      minWidth="100%"
      minHeight="100%"
      alignItems="center"
      justifyContent="center"
      gap="3"
    >
      <Flex gap="100px">
        <Heading color="primary" as="h1">
          Kenzie Hub
        </Heading>
        <Button onClick={redirectLogin} bg="gray.3">Voltar</Button>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-around"
        textAlign="center"
        maxW="lg"
        minHeight="sm"
        bg="gray.3"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="gray.3"
        p="3"
      >
        <RegisterForm />
      </Flex>
      <Toaster />
    </Flex>
  );
}
