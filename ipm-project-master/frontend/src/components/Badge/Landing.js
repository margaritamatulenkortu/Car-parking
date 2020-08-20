import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class Landing extends Component {

    render() {
        return (
            <div className='landing'>
                <h1>Cognizant badge system</h1>
                <h3>In case you need to request ID for your visitor, please select "Get visitor badge" </h3>
                <Link to='/badge/visitors'>
                    <button className='landingButton'>Get visitor badge</button>
                </Link>
               <br/>
               <h3>In case you have lost/forgotten your ID, please select "Report lost/forgotten badge"</h3>
                <Link to='/badge/associates'>
                    <button className='landingButton'>Report lost/forgotten badge</button>
                </Link>
                <br/>
            </div>

        );
    }
}

export default Landing;
