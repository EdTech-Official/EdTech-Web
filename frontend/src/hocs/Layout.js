import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WebNavbar from '../Components/WebNavbar';
import MobileNavbar from '../Components/MobileNavbar';
import { connect } from 'react-redux';
import queryString from 'query-string'
import { check_authenticated, load_user, googleAuthenticate } from '../context/actions/auth';

const Layout = (props) => {

    let location = useLocation();

    useEffect(() => {

        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        if(state && code) {
            props.googleAuthenticate(state, code)
        } else {
            props.check_authenticated();
            props.load_user();
        }

    }, [location])

    return (
        <div>
            <WebNavbar />
            <MobileNavbar />
            {props.children}
        </div>
    )
}

export default connect(null, { check_authenticated, load_user, googleAuthenticate })(Layout)
