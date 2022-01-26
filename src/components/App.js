import React, { createContext } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import useLanguages from "../hooks/useLanguages";

export const MessageContext = createContext();
export const LanguageContext = createContext();
const message = "Hello context";

const App = () => {
  const [language, changeLanguage, list] = useLanguages();
  const { Provider } = MessageContext;
  const { Provider: LanguageProvider } = LanguageContext;

  return (
    <LanguageProvider value={{ language, changeLanguage, list }}>
      <Provider value={message}>
        <Header />
        <Main />
      </Provider>
    </LanguageProvider>
  );
};

export default App;
