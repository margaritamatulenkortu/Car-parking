import React from 'react';
import './Styling.css';
import axios from 'axios';
import moment from 'moment';

export default class Reports extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allVisitors: [],
        };
    }
    componentDidMount() {
        axios.get(`http://localhost:8085/api/visitors`)
            .then(res => {
                this.setState({ allVisitors: res.data._embedded.visitorList, });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (

                <>
                  <h1>To review all visitors and time when left</h1>
                <div className='list'>
                <h4>Invalid date if still in the Cognizant premises</h4>
         <ol>
                    <div className='item'>
                    
                    {this.state.allVisitors.map(allVisitor =>
                            <li key={allVisitor.id}>
                                        <label className='bold'>{allVisitor.name}</label><br />
                                        <label>Requested on: </label>{moment(allVisitor.dateTimeCreated).format('MMMM Do YYYY, h:mm:ss a')}<br />
                                        <label>Left premises on:</label> {moment(allVisitor.dateTimeLeft).format('MMMM Do YYYY, h:mm:ss a')}<br /> </li>)}
                    </div>
                    </ol>
                </div>
            </>
        );

    }
}
