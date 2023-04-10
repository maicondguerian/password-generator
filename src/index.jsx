import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Conatiner } from "./components/container/container"
import { MyContext } from "./context/Mycontext"
import { theme } from "./theme/theme"
import { VisorInputPassword } from "./components/visotPassword/VisorInputPassword"
import { PasswordGenerator } from "./components/passwordGenerator/PasswordGenerator"
import { useState } from "react"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0%;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border:none;
    font-family: 'Roboto Mono', monospace;
  }

  body{
    background-color: ${props => props.theme.primaryColors.bgContainer};
    color: ${props => props.theme.primaryColors.fColor};
  };
`

function App() {
  const [passwordLength, setPasswordLength] = useState(0);
  const [password, setPassword] = useState("");

  const getRandonLower = () => {
    const charLower = "abcdefghijklmnopqrstuvwxyz";
    return charLower[Math.floor(Math.random() * charLower.length)];
  };

  const getRandonUpper = () => {
    const charUpper = "abcdefghijklmnopqrstuvwxyz";
    return charUpper.toLocaleUpperCase()[Math.floor(Math.random() * charUpper.length)];
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10).toString();
  };

  const getRandomSimbols = () => {
    const simbols = "!@#$%&*?*_,-./";
    return simbols[Math.floor(Math.random() * simbols.length)];
  }

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

const handleGeneratePassword = () => {

}

  // function handleGeneratePassword() {
  //   const allChars = lowerLetters + upperLetters + numbers + symbols;
  //   let generatedPassword = "";

  //   for (let i = 0; i < passwordLength; i++) {
  //     const randomIndex = Math.floor(Math.random() * allChars.length);
  //     generatedPassword += allChars[randomIndex];
  //   }

  //   setPassword(generatedPassword);
  // }

  return (
    <ThemeProvider theme={theme}>
      <MyContext.Provider value={{ handlePasswordLengthChange, password, passwordLength, handleGeneratePassword }}>
        <GlobalStyle />
        <Conatiner>
          <VisorInputPassword />
          <PasswordGenerator />
        </Conatiner>
      </MyContext.Provider>
    </ThemeProvider>
  )
}
export default App
