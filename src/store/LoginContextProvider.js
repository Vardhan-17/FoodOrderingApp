import { useState } from "react"
import LoginContext from "./LoginContext";


const LoginContextProvider=(props)=>{
    const [status,setStatus]=useState(false);

    const logoutHandler=()=>{
        setStatus(false);
    }

    const loginHandler=()=>{
        setStatus(true);
    }

    const log={
        isLoggedIn:status,
        logout:logoutHandler,
        login:loginHandler
    }
    return <LoginContext.Provider value={log}>{props.children}</LoginContext.Provider>
}

export default LoginContextProvider;