import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import {Navigate } from 'react-router-dom';
import { Context } from "../../main";
const AdminUser = () => {
    const { authToken } = useContext(Context);
    const [users, setUsers] = useState(null);
   
    const getAllUser = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/v1/admin/users', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                credentials: 'include',
            })
            const data = await response.json()
            if (response.status === 401) {
              // Unauthorized, redirect to home page
              return <Navigate to={'/'} />
          } else {
              setUsers(data.users);
          }

        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getAllUser()
    }, [authToken])
    return (
        <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((currentUser, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{currentUser.name}</td>
                  <td>{currentUser.email}</td>
                  <td>{currentUser.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
}

export default AdminUser
