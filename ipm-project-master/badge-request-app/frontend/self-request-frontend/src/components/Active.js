import React from 'react';
import './Styling.css';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class Active extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeVisitors: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8085/api/visitors/?active=true'
            //params: {
             //  active: true
           // }
       // }
        )
            .then(res => {
                this.setState({ activeVisitors: res.data._embedded.visitorList, });
            })

            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <>
                <h1>Active visitors</h1>
                <div className='list'>
                    <ol>
                        <h3 className='notice'>To see details click on visitor's name</h3>
                       
                        {this.state.activeVisitors.map(activeVisitor =>
                            <li key={activeVisitor.id}>
                                <div className='item'>
                                    <div className='itemName'>
                                        <Link to={`/active/${activeVisitor.id}`}>{activeVisitor.name}</Link>
                                    </div> <br />
                                        Time: {moment(activeVisitor.dateTimeCreated).format('MMMM Do YYYY, h:mm:ss a')}<br />
                                        Badge Nr: {activeVisitor.accessCardID}
                                </div></li>)} 
                    </ol>
                </div>
            </>
        );
    }
}

