import React from 'react';
import './Styling.css';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';



export default class VisitorDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visitors: {},
            //activeVisitors: [],
        };
        this.remove = this.remove.bind(this);
    }

    remove(event) {
        event.preventDefault();
        const { id } = this.props.match.params
        axios({
            method: 'patch',
            url: `http://localhost:8085/api/visitors/${id}`,
            data: [{
                "op": "replace",
                "path": "/active",
                "value": "false",
            }],
           headers: {
            "Content-Type": "application/json-patch+json"} 
        })
        alert('Visitor is not active anymore');
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`http://localhost:8085/api/visitors/${id}`)
            .then(res => {
                console.log(res.data)
                this.setState({ visitors: res.data });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <div className='list'>
                    <div className='item'>
                        <h2>Details of {this.state.visitors.name}</h2>
                        <h4>Name :</h4> {this.state.visitors.name}
                        <h4>Is instructed? </h4>{
                            this.state.visitors.isInstructed && typeof this.state.visitors.isInstructed !== undefined ?
                                this.state.visitors.isInstructed.toString() :
                                null}
                        <h4>Time: </h4>{moment(this.state.visitors.dateTimeCreated).format('MMMM Do YYYY, h:mm:ss a')}
                        <h4>Badge Nr: </h4>{this.state.visitors.accessCardID}
                        <h4>To meet: </h4>{this.state.visitors.visiting}
                        <h4>Representing company: </h4> {this.state.visitors.company}
                        <h4>Phone nr.: </h4> {this.state.visitors.phoneNr}
                        <h4>Category: </h4> {this.state.visitors.category}
                        <div>
                        <button className='buttonList' onClick={this.remove}>Remove from active</button>
                        <Link to={`/active`}><button className='buttonList'>Back</button></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

