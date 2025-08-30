import { useEffect } from "react";
import PasswordGenerate from "./components/passwordgenerator"
import PasswordTips from "./components/passwordtips";

function App() {

  useEffect(() => {
    document.title = "Password Generator";
  }, []);

  return (
    <>
      <PasswordGenerate />
      <PasswordTips />
    </>
  );
}

export default App
