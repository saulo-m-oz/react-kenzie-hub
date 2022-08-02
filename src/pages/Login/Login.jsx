import {
  Text,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Toaster } from 'react-hot-toast';
import { useHistory } from "react-router-dom";

export default function Login() {

  const history = useHistory();

  function redirectRegister(){
    history.push("/cadastro");
  }

  return (
    <Flex p="3" textAlign="center" flexDirection="column" minWidth="100%" minHeight="100%" alignItems="center" justifyContent="center" gap="3">
      <Heading color="primary" as="h1">Kenzie Hub</Heading>
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
        <LoginForm />
        <Text color="gray.1" fontSize="xs">Ainda não possui uma conta?</Text>
        <Button onClick={redirectRegister} size="lg" width="100%" bgColor="gray.1" color="gray.0" sx={{
          "&:hover":{
            bgColor: "gray.2"
          }
        }}>Cadastre-se</Button>
      </Flex>
      <Toaster/>
    </Flex>
  );
}
