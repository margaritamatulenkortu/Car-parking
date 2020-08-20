import React, {useState, useEffect} from 'react';
import {Form, Button, Container, Card} from 'react-bootstrap';
import {Consumer} from '../Context';
import { toast } from 'react-toastify';


const Login = (props) => {

	const [users, setAllUsers] = useState([]);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(true);
	const [isDisabled, setIsDisabled] = useState(true);


	useEffect(() => {
		setIsDisabled(!email || !password)
	}, [email, password])
	

	return(
			<Consumer>
				{({users}) => {
					const handleSubmit = e => {
						e.preventDefault();
						users.forEach((user) => {
							if (user.email === email && user.password === password) {
								localStorage.setItem('isLoggedIn', true);
								localStorage.setItem('currentUserId', user.id);
							}});
						if(JSON.parse(localStorage.getItem('isLoggedIn'))){
							props.history.push('/')
							window.location.reload();
						}else{
							toast.error('This is wront Credentials')
						}
					}
					return(

					<Container>
					<Card border="light" className="mx-auto mt-5 bg-light w-50">
						<Card.Header as="h5">Login</Card.Header>
						<Card.Body>
							<Card.Text>
							<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email" 
								placeholder="Enter email"
								value = {email}
								onChange = {({target}) => setEmail(target.value)}
							/>
							<Form.Text className="text-muted">
								Use Corporate Email to Login!
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control 
							type="password" 
							placeholder="Password" 
							value = {password}
							onChange = {({target}) => setPassword(target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check 
							type="checkbox" 
							label="Remember me" 
							checked={remember} 
							onChange = { ({target}) => setRemember(target.checked)}					
							/>
						</Form.Group>
						<Button variant="primary" type="submit" disabled={isDisabled} onClick={handleSubmit}>
							Submit
						</Button>
					</Form>
							</Card.Text>
						</Card.Body>
					</Card>
					</Container>
				)
			}}
			</Consumer>
	)
}

export default Login;