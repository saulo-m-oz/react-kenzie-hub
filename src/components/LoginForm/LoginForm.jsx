import {
  Heading,
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import YupPassword from "yup-password";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { kenzieHub } from "../../services/Api";
import toast from "react-hot-toast";
import {
  EmptyField,
  InvalidLogin,
  Redirecting,
  SuccessfulLogin,
} from "../../Animations/Toaster";
import { useHistory } from "react-router-dom";

YupPassword(yup); // extend yup

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(() => EmptyField("Email")),
    password: yup.string().required(() => EmptyField("Senha")),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
  });

  function onSubmit(data) {
    kenzieHub
      .post("/sessions", data)
      .then((res) => {
        SuccessfulLogin();
        localStorage.setItem("userToken", res.data.token)
        setTimeout(() => {
          Redirecting();
          setTimeout(() => {
            toast.dismiss();
            history.push("/");
          }, 1600);
        }, 1000);
      })
      .catch((error) => InvalidLogin());
  }

  function showPassword() {
    setShow(!show);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="4">
        <Heading as="h2" fontSize="2xl">
          Login
        </Heading>
        <InputGroup size="lg">
          <InputLeftAddon
            color="gray.0"
            bg="gray.3"
            children="Email"
            fontSize=".8rem"
            width="80px"
            justifyContent="center"
          />
          <Input
            fontSize="sm"
            bg="gray.2"
            id="email"
            placeholder="User@example.com"
            {...register("email")}
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputLeftAddon
            color="gray.0"
            bg="gray.3"
            children="Senha"
            fontSize=".8rem"
            width="80px"
            justifyContent="center"
          />
          <Input
            bg="gray.2"
            type={show ? "text" : "password"}
            id="password"
            placeholder="Senha"
            fontSize="sm"
            {...register("password")}
          />
          <InputRightElement>
            <Button size="sm" onClick={showPassword} color="gray.0" bg="gray.2">
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          size="lg"
          width="100%"
          color="gray.0"
          bg="primary"
          type="submit"
          sx={{
            "&:hover": {
              bg: "primaryFocus",
            },
            "&:active": {
              bg: "primaryNegative",
            },
          }}
        >
          Login
        </Button>
      </Flex>
    </form>
  );
}
