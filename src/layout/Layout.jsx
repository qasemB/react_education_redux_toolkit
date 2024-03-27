import React, {useState} from 'react';
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

const Layout = () => {
    const [page, setPage] = useState("posts")
    return (
        <div>
            <Content page={page}/>
            <Sidebar setPage={setPage}/>
            <Navbar/>
        </div>
    );
};

export default Layout;