import React               from "react"
//import { connect }         from "react-redux"
import { Redirect, Route } from "react-router"

const PrivateRoute = ({component,roles,auth, ...originProps}) => {
    const PageWrapper = (pageProps) => {
        const OriginalPage = component;
        if(roles.includes('unknown')){
            return <OriginalPage {...pageProps} />
        }
        if(auth === undefined) {
            return <Redirect to='/login' />
        }
        let userLogged = roles.filter(item => auth.includes(item))
        if(userLogged){
            return <OriginalPage {...pageProps} />
        }
        return <Redirect to='/login' />
    }
    return (
        <Route component={PageWrapper} {...originProps} />
    )
}

export default PrivateRoute;

//const ConnectedPrivateRoute = connect(state => ({auth: state?.auth?.token}))(PrivateRoute)
//export default ConnectedPrivateRoute