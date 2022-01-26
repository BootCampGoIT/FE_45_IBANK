import React, { useContext } from "react";
import { LanguageContext } from "../App";

const LanguageSelector = () => {
  const { language, changeLanguage, list } = useContext(LanguageContext);
  return (
    <label>
      Language:
      <select onChange={changeLanguage} value={language.name}>
        {Object.keys(list).map((key) => (
          <option value={key} key={key}>
            {list[key]}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;
