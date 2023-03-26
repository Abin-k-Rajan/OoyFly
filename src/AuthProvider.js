import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    auth: null,
    setAuth: () => {},
    user: null,
    setUser: () => {}
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        // const isAuth = async () => {
        //     try {
        //         const res await
        //     }
        // }
        console.log('change auth state')
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth, user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;