/**
 * A context that provides a Theme for Apllication
 * It is to be used in components
 * So, it will be called in that particular Compnent
 */


import { createContext } from "react";


const ThemeContext = createContext('Light');


export default ThemeContext;