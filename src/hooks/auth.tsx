import { ReactNode, useContext, useState } from "react";
import { AuthContext } from "../contexts/auth.context";

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState("Kauan");

  function autenticarComIAS() {
    console.log("IAS");
  }

  function logOff() {
    console.log("Saiu");
  }

  return (
    <AuthContext.Provider value={{ usuario, autenticarComIAS, logOff }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
