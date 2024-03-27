import React from 'react';

const Sidebar = ({setPage}) => {
    const items = [
        {title: "کاربران" , props: {onClick: ()=>setPage("users")}},
        {title: "پست ها" , props: {onClick: ()=>setPage("posts")}},
        {title: "گالری" , props: {onClick: ()=>setPage("gallery")}},
        {title: "نظرات" , props: {onClick: ()=>setPage("comments")}},
    ]
    return (
        <section className={"bg-white dark:bg-gray-500 w-sidebar_width fixed right-0 top-0 h-screen pt-navbar_height overflow-y-auto shadow-lg"}>
            <div className={"w-full p-4"}>
                <ul>
                    {items.map((item, i)=>(
                        <li key={"sedebarItems_"+i} {...item.props} className={"my-4 cursor-pointer dark:hover:bg-gray-500 hover:bg-blue-100 border border-blue-600 dark:border-white text-blue-600 dark:text-white  px-2 py-1 rounded-md"}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;