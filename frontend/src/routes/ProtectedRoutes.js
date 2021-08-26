import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import AboutCollege from '../Pages/AboutCollege';
import People from '../Pages/Faculty';
import Notes from '../Pages/Notes';
import Portion from '../Pages/Portion';
import Recommendation from '../Pages/Recommendations';
import Textbook from '../Pages/Textbook';
import Timetable from '../Pages/Timetable';
import User from '../Pages/User';
import MobileNavbar from '../Components/MobileNavbar';
import WebNavbar from '../Components/WebNavbar';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

const ProtectedRoutes = ({isAuthenticated, isActivated}) => {
    
    if(!isAuthenticated) {
        return <Redirect to='/' />
    }

    // if(!isActivated && isAuthenticated) {
    //     return <Redirect to='/select-preferences' />
    // }

    return (
        <div>
            <WebNavbar />
            <MobileNavbar />
            <Switch>
                <Route path='/timetable' component={Timetable} />
                <Route path='/portion' component={Portion} />
                <Route path='/textbook' component={Textbook} />
                <Route path='/notes' component={Notes} />
                <Route path='/recommendation' component={Recommendation} />
                <Route path='/faculty' component={People} />
                <Route path='/about' component={AboutCollege} />
                <Route path='/user' component={User} />
            </Switch>      
        </div>
    )

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isActivated: state.auth.isActivated,
}) 

export default withRouter(connect(mapStateToProps,{})(ProtectedRoutes));