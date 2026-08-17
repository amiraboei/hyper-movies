import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Profile() {
    const { user, session } = useContext(UserContext);
    const navigate = useNavigate();

    return session ? (
        <div>
            <h2>User Profile</h2>
            <h1>{user.username}</h1>


        </div>
    ) : (
        <Navigate to='/login' replace />

  )
}
