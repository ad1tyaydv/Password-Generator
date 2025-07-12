import { useEffect } from "react";
import Login from "./components/login";
import PasswordGenerate from "./components/passwordgenerator"


function App() {

  useEffect(() => {
    document.title = "Password Generator";
  }, []);

  return (
    <PasswordGenerate />
  );
}

export default App
