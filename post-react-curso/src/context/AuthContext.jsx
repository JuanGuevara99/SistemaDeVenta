import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [User] = useState([])
    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
            console.log(event);
        });

        return () => {
            data.subscription;
        }

    }, []);

    return (
        <AuthContext.Provider value={User}> {  children  }   </AuthContext.Provider>
    )
};

export const UserAutch = ()=>{
    return useContext(AuthContext)
}