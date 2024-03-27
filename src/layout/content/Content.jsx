import React from 'react';
import Users from "../../pages/Users";
import Posts from "../../pages/Posts";

const Content = ({page}) => {
    return (
        <section className={"bg-blue-100 dark:bg-gray-400 w-full h-screen overflow-auto pr-sidebar_width pt-navbar_height"}>
            <div className={"w-full p-4"}>
                {
                    page === "users" ? (
                        <Users/>
                    ) : page === "posts" ? (
                        <Posts/>
                    ) : null
                }
            </div>
        </section>
    );
};

export default Content;