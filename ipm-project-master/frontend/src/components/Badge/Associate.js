import React from 'react';
import axios from 'axios';

class Associate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {  //to store data typed (controlled inputs), allows to add validation later. 
            associateId: '',
            phoneNr: '',
            accessCardID: '',
            laptopID: '',
            lostReason: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSelectReason = (event) => {
        this.setState({
            lostReason: event.target.value
        });
    };

    validate = () => {
        let numberError = '';

        if (!this.state.numberError.includes('/[0-9]+/g')) {
            numberError = 'use only numbers';
        }

        if (numberError) {
            this.setState({ numberError });
            return false;
        }
        return true;
    };

    handleSubmit(event) {
        event.preventDefault();  //to avoid page from refresh
        console.log(this.state);
        axios.post('/badge-api/associates', this.state)
            .then(response => {
                console.log(response);
                this.setState({
                    associateId: '',
                    phoneNr: '',
                    accessCardID: '',
                    laptopID: '',
                    lostReason: '', 
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit} >
                    <h2>Request for associate badge</h2>
                    <br />
                    <p type='Your associate ID number :'></p>
                    <input type='number'
            pattern="/^-?\d+\.?\d*$/" 
            min="0" max="999999"
                        placeholder='Associate ID'
                        name='associateId'
                        id='associateId'
                        value={this.state.associateId}
                        onChange={this.handleChange}
                        required></input>
                    <div className='numberError'>
                        {this.state.numberError}
                    </div>
                    <br />
                    <p type='Phone number:'></p>
                    <input type='number'
                        placeholder='phone number (incl.country code)'
                        name='phoneNr'
                        id='phoneNr'
                        value={this.state.phoneNr}
                        onChange={this.handleChange}
                        required></input>
                    <div className='numberError'>
                        {this.state.numberError}
                    </div>
                    <br />
                    <p type='Access/visitor card No:'></p>
                    <input type='number'
                        name='accessCardID'
                        id='accessCardID'
                        value={this.state.accessCardID}
                        onChange={this.handleChange}
                        required></input>
                    <div className='numberError'>
                        {this.state.numberError}
                    </div>
                    <br />
                    <br />
                    <p type='Your laptop serial number:'></p>
                    <input type='text'
                        name='laptopID'
                        id='laptopID'
                        value={this.state.laptopID}
                        onChange={this.handleChange}
                        required></input>
                    <br />
                    <div>
                        <p type='Select reason why requesting a new badge:'></p>
                        <select value={this.state.lostReason} onChange={this.handleSelectReason} required>
                            <option>Badge was forgotten</option>
                            <option>Badge was lost</option>
                            <option>Badge was stolen by Vitalijs</option>
                        </select>
                        <br />
                    </div>
                    <button type='submit'>Request a badge</button>
                </form>
            </>
        );
    }
}

export default Associate;