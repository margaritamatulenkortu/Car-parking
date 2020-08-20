import React from 'react';
import './Styling.css';
import Visitor from './Visitor';
import Associate from './Associate';

export default class SelectForm extends React.Component {

    state = {
        visibleVisitor: false,
        visibleEmployee: false,
    };

    handleClickVisitor = () => {
        this.setState({ visibleVisitor: !this.state.visibleVisitor })
    }

    handleClickEmployee = () => {
        this.setState({ visibleEmployee: !this.state.visibleEmployee });
    }

    change = (event) => {     //function that updates the state
        this.setState({
            name: event.target.value
        });
    };

    render() {
        return (
            < >
                <div className='centerButtons'>
                <h1> Hello! Who are you?</h1>
                    <button className='buttonV'
                        onClick={this.handleClickVisitor}>I'm a Visitor</button>
                    <button className='buttonE'
                        onClick={this.handleClickEmployee}>I'm an Associate</button>
                </div>
                {this.state.visibleVisitor && (<Visitor />)}
                {this.state.visibleEmployee && (<Associate />)}
            </>
        );
    }
}

