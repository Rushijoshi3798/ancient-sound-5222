import {useState , createContext} from "react";

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("")
    
    const login = (token) => {
        setIsAuth(true);
        setToken(token)
    }

    const logout = () => {
        setIsAuth(false);
        setToken("")
    }

    return (
        <AuthContext.Provider value={{isAuth, setToken, token, login, logout}}>{children}</AuthContext.Provider>
    )

}

export default AuthContextProvider;