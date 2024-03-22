import React from 'react';
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const Layout = ({setDarkMode, darkMode}) => {
    return (
        <div>
            <Content/>
            <Sidebar/>
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
        </div>
    );
};

export default Layout;