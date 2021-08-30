import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import WebNavbar from '../Components/WebNavbar';
import MobileNavbar from '../Components/MobileNavbar';
import { check_authenticated, load_user, googleAuthenticate } from '../context/actions/auth';

const Layout = (props) => {
                
    let location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true
        const intervalId = setInterval(() => {
            const values = queryString.parse(location.search);
            const state = values.state ? values.state : null;
            const code = values.code ? values.code : null;

            if(state && code) {
                props.googleAuthenticate(state, code)
            } else {
                props.check_authenticated();
                props.load_user();
            }
            setLoading(false)
        }, 5000)
        
        return () => {
            clearInterval(intervalId);
            isMounted = false
        }
    }, [location, useState])

    return (
        loading ? (
            <div>loading</div>
        ) : (
            <div>
                { (props.isActivated && props.isAuthenticated) && <WebNavbar />}
                { (props.isActivated && props.isAuthenticated) && <MobileNavbar />}
                {props.children}
            </div>
        )
    )
}

const mapStateProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isActivated: state.auth.isActivated,
    user: state.auth.user,
})
  
export default connect(mapStateProps, { check_authenticated, load_user, googleAuthenticate })(Layout);
  