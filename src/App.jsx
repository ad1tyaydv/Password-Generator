import { useEffect } from "react";
import PasswordGenerate from "./components/passwordgenerator"
import PasswordTips from "./components/passwordtips";
import FAQuestions from "./components/faq";

function App() {

  useEffect(() => {
    document.title = "PassCook";
  }, []);

  return (
    <>
      <PasswordGenerate />
      <PasswordTips />
      <FAQuestions />
    </>
  );
}

export default App
