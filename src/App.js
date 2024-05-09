/**
 * Wrapping up my application with the context provider
 */

import ChildComponent from "./Components/ChildComponent";
import ThemeContext from "./Components/ThemeContext";

 const App = () =>{
  return(
    <>
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
    </>
  );
 }

 export default App;