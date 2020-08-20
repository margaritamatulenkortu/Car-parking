import React from 'react';
import axios from 'axios';
import './Styling.css';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });
export default class Visitor extends React.Component {
  
    constructor(props) {
        super(props)
       
       this.state = {          //to store data typed (controlled inputs), allows to add validation later.
            name: '',
            visiting: '',
            company: '',
            phoneNr: '',
            category: '',
            isInstructed: false,
            accessCardID: '',
            numberError: '', 
            //errorMessage: ''
        } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeCheckboxInstructed = this.changeCheckboxInstructed.bind(this);
       
    }

    handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
    }
 
    changeCheckboxInstructed = (event) => {     //function that updates the checkbox
        this.setState({
            isInstructed: event.target.checked
        });
    };

    changeSelectCategory = (event) => {
        this.setState({
            category: event.target.value
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
        axios.post('http://localhost:8085/api/visitors', this.state)
            .then(response => {
                console.log(response);
                this.setState({
                    name: '',
                    visiting: '',
                    isInstructed: '',
                    company: '',
                    phoneNr: '',
                    category: '',
                    accessCardID: '',
                    numberError: '', 
                });
                history.push('/'); 
            })
            .catch(error => {
                console.log(error)
            })
            alert('form submitted!');
            
    }
    render() {
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit}>
                    <h2>Request for visitor badge</h2>
                    <br />
                    <div>
                        <p type='Full name:'></p>
                        <input type='text'
                            placeholder='Full name'
                            name='name'
                            id='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                            required>
                        </input>
                    </div>
                    <br />
                    <p type='Visiting / To meet:'></p>
                    <input type='text'
                        placeholder='Full name, position'
                        name='visiting'
                        id='visiting'
                        value={this.state.visiting}
                        onChange={this.handleChange}
                        required></input>
                    <br />
                    <p type='Company representing:'></p>
                    <input type='text'
                        placeholder='Name of the company'
                        name='company'
                        id='company'
                        value={this.state.company}
                        onChange={this.handleChange}
                        required></input>
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
                    <p type='Visit category:'></p>
                    <select name='category' id='category' value={this.state.category} onChange={this.changeSelectCategory} required>
                        <option>Please select one</option>
                        <option>Category1</option>
                        <option>Category2</option>
                    </select>
                    <br />
                    <p type='Have you received safety instructions and visitor regulations? Check if yes'></p>
                    <input type='checkbox'
                        checked={this.state.isInstructed}
                        name='isInstructed'
                        id='isInstructed'
                        //value={this.state.isInstructed}
                        onChange={this.changeCheckboxInstructed}
                        required
                        >
                        </input>
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
              <button type='submit'>Request a badge</button>
                </form>
            </>
        );
    }
}
