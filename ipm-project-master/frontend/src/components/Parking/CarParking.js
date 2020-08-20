import React, { Component } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            carNum: '',
            firstName: '',
            lastName: '',
            phone: '',
            aproval: "unknown",
            historyCarNumber: [],
            historyCarAddedTime: []
        };
    }


    changeHandler = (e) => {
        if (e.target.name === "userId") {
            this.setState({ "userId": Number(e.target.value) })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    };
    changeHandlerphone = (e) => {
        if (e.target.name === "phone") {
            this.setState({ "phone": Number(e.target.value) })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('/api/car_park', this.state)
            .then(response => {
                this.setState({
                    posts: response.data,
                    time: response.data.carAddedTime
                })
                axios.get('/api/car_park/car/'+this.state.userId+'/all')
                    .then(response => {
                            this.setState({

                                historyCarNumber: [response.data[response.data.length-2].carNum,response.data[response.data.length-3].carNum,response.data[response.data.length-4].carNum],
                                historyCarAddedTime: [response.data[response.data.length-2].carAddedTime,response.data[response.data.length-3].carAddedTime,response.data[response.data.length-4].carAddedTime]

                            })
                        console.log(response.data)
                    })
                    .catch(function (error) {
                            console.log(error);
                    })
            })
            .catch(error => {
                switch (error.response.status) {
                    case 409:
                      toast.error("Car number " + this.state.carNum + " already exist in database!")
                      break
                    case 401:
                        toast.error("Cant update user " + this.state.userId + " information!")
                        break
                    case 500:
                        toast.error("Server Error!")
                        console.log("Server error, try again later")
                        break
                    default:
                        toast.error("Some Error occurred!")
                        break
                }
                console.log(error.response.status)
                console.log('Error retreiving data')

            })

    }
    activeCarhandler = () => {
        this.setState({
          text: this.state.carNum,
          dateAdd: new Date().toLocaleString()
        })
        setTimeout(() => {

            axios.get('/api/car_park/car/person/'+this.state.carNum)
        .then(response => {
                if (response.data.approvedStatus===false){
                 this.setState({
                        aproval: "Waiting approval"
                    })

                }else if (response.data.approvedStatus===true){
                 this.setState({
                        aproval: "Approved"
                    })
                }
                console.log(response.data)

            })

          .catch(function (error) {
            console.log(error);
          })

          }, 1000)

      }

    getingResponse = e => {
        e.preventDefault()
        axios.get('/api/car_park/car/person/'+this.state.carNum)
        .then(response => {
                if (response.data.approvedStatus===false){
                    this.setState({
                        aproval: "Waiting approval"
                    })
                }else if (response.data.approvedStatus===true){
                    this.setState({
                        aproval: "Approved"
                    })
                }
                console.log(response.data)
            })

            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { userId, carNum, firstName, lastName, phone } = this.state
        return (

            <div className="App container">

                <div className="container">
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-2"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Feature_parking.svg/600px-Feature_parking.svg.png"
                            alt="" width="72" height="72" />
                        <h2>Parking system&#8203;</h2>
                        <p className="lead">Register your car or change number fast and easy</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4 order-md-2 mb-2">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your parking history</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Before pre-previous car</h6>
                                        <small className="text-muted">Time: {this.state.historyCarAddedTime[2]}</small>
                                    </div>
                                    <span className="text-muted">{this.state.historyCarNumber[2]}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Pre-previous car</h6>
                                        <small className="text-muted">Time: {this.state.historyCarAddedTime[1]}</small>
                                    </div>
                                    <span className="text-muted">{this.state.historyCarNumber[1]}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Previous car</h6>
                                        <small className="text-muted">Time: {this.state.historyCarAddedTime[0]}</small>
                                    </div>
                                    <span className="text-muted">{this.state.historyCarNumber[0]}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Status: {this.state.aproval}</h6>
                                        <small>Time: {this.state.dateAdd}</small>
                                    </div>
                                    <span className="text-success"> {this.state.text}</span>

                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 order-md-1">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Add car</span>
                            </h4>

                            <form className="needs-validation" noValidate="" onSubmit={this.submitHandler}>

                                <div className="mb-3">
                                    <label>Employee ID<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" className="form-control" placeholder="your ID number"
                                        name="userId" value={userId} onChange={this.changeHandler} required />
                                </div>

                                <div className="mb-3">
                                    <label> Car number<span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" className="form-control" placeholder="your car number"
                                        minLength="3" maxLength="8" name="carNum" value={carNum}
                                        onChange={this.changeHandler} required />
                                </div>
                                <div className="mb-3">
                                    <label>First name</label>
                                    <input type="text" className="form-control" placeholder="your first name"
                                        name="firstName" value={firstName} onChange={this.changeHandler} />
                                </div>
                                <div className="mb-3">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" placeholder="your last name"
                                        name="lastName" value={lastName} onChange={this.changeHandler} />
                                </div>
                                <div className="mb-3">
                                    <label>Phone number</label>
                                    <input type="text" className="form-control" placeholder="your phone number"
                                        name="phone" value={phone} onChange={this.changeHandlerphone} />
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info" required />
                                    <label className="custom-control-label" htmlFor="save-info">Agree with
                                        <a href="https://www.terms.com/"> terms and conditions</a> </label>
                                    <ToastContainer />
                                </div>
                                <hr className="mb-2" />
                                <button className="btn btn-primary btn-lg btn-lg" type={"submit"} onClick={this.activeCarhandler}>Submit</button>
                                <div className="mb-1">
                                </div>
                                <button className="btn btn-primary btn-lg btn-lg" type={"submit"} onClick={this.getingResponse}>Check car status</button>
                                <div className="mb-3">
                                </div>
                                <div className="mb-4 red">
                                    <label style={{ color: 'red' }}>* required field </label>
                                </div>


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
}


export default App;
