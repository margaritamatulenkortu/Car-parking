import React from 'react';
import './IdLost.css';
import './Styling.css';
import Visitor from './Visitor';
import Associate from './Associate';
import Landing from './Landing';
import {Route } from 'react-router-dom';


const Badge = ({match}) => (
        <>
          <Route path={match.path} exact component={Landing}/>
          <Route path={`${match.path}/visitors`} exact component={Visitor}/>
          <Route path={`${match.path}/associates`} component={Associate}/>
        </>
    );

export default Badge;
