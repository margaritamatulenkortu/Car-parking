import React from 'react';
import './Styling.css';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {

    render() {
        return (
            <div className='landing'>
                <h1>Cognizant badge system</h1>
                <h3>In case you need to request ID for your visitor, please select "Get visitor badge" </h3>
                <Link to='/visitors'>
                    <button className='landingButton'>Get visitor badge</button>
                </Link>
               <br/>
               <h3>In case you have lost/forgotten your ID, please select "Report lost/forgotten badge"</h3>
                <Link to='/associates'>
                    <button className='landingButton'>Report lost/forgotten badge</button>
                </Link>
                <br/>
                <h3>For list of all visitors, please select "Get reports"</h3>
                <Link to='/reports'>
                    <button className='landingButton'>Get reports</button>
                </Link>
                <br/>
                <h3>For admin to see all active visitors as at now, please select "Show active visitors"</h3>
                <Link to='/active'>
                    <button className='landingButton'>Show active visitors</button>
                </Link>
                <br/>
            </div>

        );
    }
}


