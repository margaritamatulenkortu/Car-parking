import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            LastTwoCars: [],
            LastTwoCarTime: [],
            approvedStatus: [],
            deleteID: "",
            deleteCarNum: ""


        };
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler = (e) => {
        if (e.target.name === "userId") {
            this.setState({ "userId": Number(e.target.value) })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    };

    submitHandler = () => {

        axios.get('/api/car_park/person/' + this.state.userId)
            .then(response => {
                console.log(response.data)
                this.setState({
                    firstName: response.data.name,
                    lastName: response.data.surname,
                    phone: response.data.phone
                })

                axios.get('/api/car_park/car/' + this.state.userId + '/all')
                    .then(response => {
                        console.log(response.data)
                        this.setState({
                           // if()
                            LastTwoCars: [response.data[response.data.length - 1].carNum, response.data[response.data.length - 2].carNum],
                            LastTwoCarTime: [response.data[response.data.length - 1].carAddedTime, response.data[response.data.length - 2].carAddedTime],
                            approvedStatus: [response.data[response.data.length - 1].approvedStatus, response.data[response.data.length - 2].approvedStatus]

                        })
                        if (this.state.approvedStatus[0] === false) {
                            this.setState({
                                approvedStatus0: "Not Aproved"
                            })
                        } else {
                            this.setState({
                                approvedStatus0: "Aproved"
                            })
                        }
                        if (this.state.approvedStatus[1] === false) {
                            this.setState({
                                approvedStatus1: "Not Aproved"
                            })
                        } else {
                            this.setState({
                                approvedStatus1: "Aproved"
                            })
                        }

                    })
                    .catch(error => {
                        switch (error.response.status) {
                            case 401:
                                toast.error("No information in database")
                                break
                            default:
                                toast.error("Some Error occurred!")
                                break
                        }
                    })
            })
            .catch(error => {
                switch (error.response.status) {
                    case 401:
                        toast.error("No information in database")
                        break
                    default:
                        toast.error("Some Error occurred!")
                        break
                }
            })
    }

    deleteUserHandler = () => {

        axios.delete('/api/car_park/person/' + this.state.deleteID)
            .then(response => {
                console.log(response.data)
                toast.info("User " + this.state.userId + " deleted")

            })

            .catch(function (error) {
                toast.error("Some Error occurred!")
                console.log(error);
            })
    }
    deleteCarHandler = () => {

        axios.delete('/api/car_park/car/' + this.state.deleteCarNum)
            .then(response => {
                console.log(response.data)
                toast.info("Car " + this.state.deleteCarNum + " deleted")

            })

            .catch(function (error) {
                toast.error("Some Error occurred!")
                console.log(error);
            })
    }
    aprovalHandler = () => {

        axios.get('/api/car_park/car/' + this.state.userId + '/all')
            .then(response => {
                console.log(response.data)
                axios.put('/api/car_park/car/approve', { "carNum": response.data[response.data.length - 1].carNum, "approvedStatus": true
             }
                )
                    .then(response => {
                        console.log(response.data)

                    })
                    .catch(function (error) {
                        console.log(error);
                        toast.error("Some Error occurred put!")
                    })
            })
            .catch(function (error) {
                console.log(error);
                toast.error("Some Error occurred get!")
            })
        this.submitHandler()
    }

    render() {
        const { userId, deleteID, deleteCarNum } = this.state
        return (

            <div className="App container">
                <ToastContainer />
                <div className="container">
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-2"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Feature_parking.svg/600px-Feature_parking.svg.png"
                            alt="" width="72" height="72" />
                        <h2>Parking system&#8203;</h2>
                        <p className="lead">Admin page</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4 order-md-2 mb-2">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Information about employee </span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Name: </h6>

                                        <br />
                                    </div>
                                    <span className="text-muted">{this.state.firstName} {this.state.lastName}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Phone Nr.: </h6>
                                    </div>
                                    <span className="text-muted">{this.state.phone}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0"> Previous car:</h6>
                                        <small className="text-muted">Time: {this.state.LastTwoCarTime[1]} <br /> Status: {this.state.approvedStatus1}</small>
                                    </div>
                                    <span className="text-muted">{this.state.LastTwoCars[1]}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Last car:</h6>

                                        <small>Time: {this.state.LastTwoCarTime[0]} <br /> Status: {this.state.approvedStatus0}</small>

                                    </div>

                                    <span className="text-success"> {this.state.LastTwoCars[0]}</span>

                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 order-md-1">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Check employee</span>
                            </h4>

                            <form className="needs-validation" noValidate="" onSubmit={this.submitHandler}>

                                <div className="mb-3">
                                    <label>Employee ID </label>
                                    <input type="text" className="form-control" placeholder="employee ID number"
                                        name="userId" value={userId} onChange={this.changeHandler} required />
                                </div>
                                <hr className="mb-2" />
                                <button className="btn btn-primary btn-sml" type={"submit"} onClick={this.submitHandler}>Get information</button>

                                <div className="mb-3">
                                    <br />
                                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted">Aprove status for last added car </span>
                                    </h4>


                                </div>

                                <hr className="mb-2" />
                                <button className="btn btn-success btn-sml btn-sml" type={"submit"} onClick={this.aprovalHandler}>Aprove last car </button>


                                <div className="mb-3">

                                    <br />
                                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted" >Delete car </span>
                                    </h4>
                                    <input type="text" className="form-control" placeholder="Car number"
                                        name="deleteCarNum" value={deleteCarNum} onChange={this.changeHandler} required />

                                </div>

                                <hr className="mb-2" style={{
                                    height: .5,
                                    borderColor: 'red'
                                }} />


                                <button className="btn btn-danger btn-sml" type={"submit"} onClick={this.deleteCarHandler}>Delete car</button>
                                <div className="mb-3">

                                    <br />
                                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-muted" >Delete Employee </span>
                                    </h4>
                                    <input type="text" className="form-control" placeholder="employee ID number"
                                        name="deleteID" value={deleteID} onChange={this.changeHandler} required />

                                </div>

                                <hr className="mb-2" style={{
                                    height: .5,
                                    borderColor: 'red'
                                }} />

                                <button className="btn btn-danger btn-sml" type={"submit"} onClick={this.deleteUserHandler}>Delete user</button>
                            </form>

                        </div>
                    </div>
                    <footer className="my-5 pt-5 text-muted text-center text-small">
                        <p className="mb-1">© 2020 AppZilla</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="https://privacy.com">Privacy</a></li>
                            <li className="list-inline-item"><a href="https://privacy.com">Terms</a></li>
                            <li className="list-inline-item"><a href="https://privacy.com">Support</a></li>
                        </ul>
                    </footer>
                </div>
            </div>
        );

    }
};


export default App;
