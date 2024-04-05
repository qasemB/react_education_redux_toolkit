import React, {useEffect, useState} from 'react';
import TableLoading from "../layout/content/TableLoading";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/users/usersSlice";

const Users = () => {

    const {isLoading, isFetching, users, error} = useSelector(state=>state.users)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(11)
        dispatch(getUsers())
    },[])
    return isLoading ? (<TableLoading/>) : error ? (
        <h1 className={"text-red-500"}>{error}</h1>
    ) : (
            <div className={"w-full p-4"}>
                {isFetching && (
                  <span>  درحال دریافت اطلاعات</span>
                )}

                <table className={"table w-full"}>
                    <thead>
                    <tr className={"h-8"}>
                        <td className={"bg-gray-300 rounded-r-md"}>#</td>
                        <td className={"bg-gray-300"}>نام کاربر</td>
                        <td className={"bg-gray-300"}>نام کاربری</td>
                        <td className={"bg-gray-300"}>ایمیل</td>
                        <td className={"bg-gray-300 rounded-l-md"}>آدرس</td>
                    </tr>
                    </thead>

                    <tbody>
                    {users.map(user=>(
                        <tr key={user.id}>
                            <td className={"bg-white rounded-r-md p-1"}>{user.id}</td>
                            <td className={"bg-white p-1"}>{user.name}</td>
                            <td className={"bg-white p-1"}>{user.username}</td>
                            <td className={"bg-white p-1"}>{user.email}</td>
                            <td className={"bg-white rounded-l-md p-1"}>{user.address?.street}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        );
};

export default Users;