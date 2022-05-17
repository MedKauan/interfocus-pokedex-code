import { createContext } from "react";

interface IAuthContext {
  usuario: string;
  autenticarComIAS(): void;
  logOff(): void;
}

export const AuthContext = createContext({} as IAuthContext);
