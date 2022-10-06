import React, {useEffect} from "react";

const Login = ({title, funcNav}) => {
    useEffect(() => {
        document.title = title;
        funcNav(false);
    }, [])

    return (
        <div>
            login
        </div>
    );
}

export default Login;