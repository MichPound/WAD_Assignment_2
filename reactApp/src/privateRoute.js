import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from './contexts/authContext'

export default function PrivateRoute({
    component: Component, ...rest
}){
    // const {currentUser } = useAuth()
    const context = useContext(AuthContext)

    return(
        <Route {...rest} render = { props => {
            return context.isAuthenticated ? <Component {...props} /> : <Redirect to = "/login" />
        }}
        ></Route>
    )
}