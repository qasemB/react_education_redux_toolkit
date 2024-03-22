import Layout from "./layout/Layout";
import {useState} from "react";

function App() {
    const [darkMode,setDarkMode] = useState("dark")
  return (
    <div className={darkMode}>
      <Layout setDarkMode={setDarkMode} darkMode={darkMode}/>
    </div>
  );
}

export default App;
