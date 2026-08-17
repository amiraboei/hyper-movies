import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const apiKey = "a86e43b051140791676e0184277c09dc";
const baseUrl = "https://api.themoviedb.org/3";

export default function UserProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [session, setSession] = useState(() => localStorage.getItem("session"));

    async function getUserData() {
        const { data } = await axios.get(
            `${baseUrl}/account?api_key=${apiKey}&session_id=${session}`
        );
        setUser(data);
    }
    useEffect(() => {
        if (session) {
            getUserData();
        }

    }, [session])

    function logout() {
        console.log("LOGOUT CLICKED");
        setSession(null);
        setUser({});
        localStorage.removeItem("session");
        toast.success("Logged out successfully!");
    }

    async function login(username, password) {
        try {
            // Step 1: Get request token
            const tokenResult = await axios.get(
                `${baseUrl}/authentication/token/new?api_key=${apiKey}`
            );

            const requestToken = tokenResult.data.request_token;

            // Step 2: Validate username and password
            await axios.post(
                `${baseUrl}/authentication/token/validate_with_login?api_key=${apiKey}`,
                {
                    username,
                    password,
                    request_token: requestToken,
                }
            );

            // Step 3: Create session
            const sessionResult = await axios.post(
                `${baseUrl}/authentication/session/new?api_key=${apiKey}`,
                {
                    request_token: requestToken,
                }
            );

            const sessionId = sessionResult.data.session_id;

            setSession(sessionId);
            localStorage.setItem("session", sessionId);

            toast.success("Login successful!");
            navigate("/profile", { replace: true });

        } catch (error) {
            console.log("LOGIN ERROR:", error.response?.data);

            toast.error(
                error.response?.data?.status_message ||
                "Invalid username or password"
            );
        }
    }

    return (
        <UserContext.Provider
            value={{
                user,
                session,
                login,
                logout,
            }}>
            {children}
        </UserContext.Provider>
    );
}