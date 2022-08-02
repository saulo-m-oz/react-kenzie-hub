import toast from "react-hot-toast";

export const EmptyField = (value) =>
  toast.error(`${value} não pode estar vazio.`);
export const InvalidInput = (value) => toast.error(`${value} não permitido.`);
export const InvalidLogin = () => toast.error("Email ou senha inválidos");
export const SuccessfulLogin = () => toast.success("Login feito com sucesso!");
export const SuccessfulRegister = () =>
  toast.success("Cadastro efetuado com sucesso!");
export const Redirecting = () => toast.loading("Redirecionando...");