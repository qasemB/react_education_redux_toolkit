import Layout from "./layout/Layout";
import {useState} from "react";
import {useSelector} from "react-redux";


function App() {
    // const [darkMode,setDarkMode] = useState("dark")
    const {darkmode} = useSelector(state=>state.darkmode)
  return (
    <div className={darkmode}>
      <Layout/>
    </div>
  );
}

export default App;
