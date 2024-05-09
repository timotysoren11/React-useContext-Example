/**
 * We use the Context here in the Child Component
 */

import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ChildComponent = () =>{
  const theme = useContext(ThemeContext);

  return(
    <div style={{background: theme === 'dark' ? '#333' : '#eee', color : theme === 'dark' ? '#fff' : '#000'}} >
      <h2>CompoonetA</h2>
      <p>This component is using the theme : {theme}</p>
    </div>
  );
}

export default ChildComponent;